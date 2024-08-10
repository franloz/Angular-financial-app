import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssetDataCustom, FilterFormValues } from '../../../interfaces';
import { FilterFormValidatorsService } from '../../../services/market-page-services/filter-form-validators.service';
import { Router } from '@angular/router';
import { FilterService } from '../../../services/market-page-services/filter.service';

@Component({
  selector: 'finance-asset-filter',
  templateUrl: './asset-filter.component.html',
  styleUrl: './asset-filter.component.css'
})
export class AssetFilterComponent {

  @ViewChild('filterDialog') filterDialog!: ElementRef<HTMLDialogElement>;

  @Input() financeAssets: AssetDataCustom[] = [];

  public filterForm: FormGroup = this.fb.group({
    marketCapMoreThan: [null, [Validators.pattern('^[0-9]+$')]],
    marketCapLowerThan: [null, [Validators.pattern('^[0-9]+$')]],
    priceMoreThan: [null, [Validators.pattern('^[0-9]+$')]],
    priceLowerThan: [null, [Validators.pattern('^[0-9]+$')]],
    isEtf: [false, []],
    isFund: [false, []],
  }, {
    validators: [
      this.filterFormValidatorsService.compareMarketCapAndPrice()
    ]
  });



  constructor(
    private fb: FormBuilder,
    private filterFormValidatorsService: FilterFormValidatorsService,
    private router: Router,
    private filterService: FilterService,
  ) { }

  public showModal = () => {
    this.filterDialog.nativeElement.showModal();
  }

  public closeModal = () => {
    this.filterDialog.nativeElement.close();
  }

  public isFilterFormValid = () => {
    if (this.filterForm.invalid) return true;
    return false;
  }

  public hasChangedFilterFormValues = () => {
    if (JSON.stringify(this.filterService.previousFormData) == JSON.stringify(this.filterForm.value)) return false;
    return true
  }

  public getpre = () => {
    return this.filterService.previousFormData;
  }

  public getfil = () => {
    return this.filterForm.value;
  }



  public filterAssets = () => {
    if (this.filterForm.invalid) return;

    //this.previousFormData = this.filterForm.value;

    if (!this.filterForm.get('isEtf')) {
      this.filterForm.get('isEtf')?.setValue(false);
    }
    if (!this.filterForm.get('isFund')) {
      this.filterForm.get('isFund')?.setValue(false);
    }
    //this.filterService.saveFilterCurrentValues(this.filterForm.value);
    this.filterService.emitFormValues(this.filterForm.value);
    this.closeModal();



    this.router.navigate([`/filter`]);

  }

  public resetForm = () => {
    this.filterForm.reset({
      marketCapMoreThan: null,
      marketCapLowerThan: null,
      priceMoreThan: null,
      priceLowerThan: null,
      isEtf: false,
      isFund: false,
    });
  }

}
