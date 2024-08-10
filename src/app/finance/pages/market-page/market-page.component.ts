import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FinanceService } from '../../services/finance.service';
import { AssetDataCustom } from '../../interfaces/asset-data-custom.interface';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { BehaviorSubject, combineLatest, filter, forkJoin, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { AssetFilterComponent } from '../../components/market/asset-filter/asset-filter.component';
import { FilterFormValues } from '../../interfaces';
import { FilterService } from '../../services/market-page-services/filter.service';

@Component({
  templateUrl: './market-page.component.html',
  styleUrl: './market-page.component.css'
})
export class MarketPageComponent implements OnInit {

  public financeAssets: AssetDataCustom[] = [];
  //actual page for pagination
  public currentPage: number = 1;
  //array with assets which it will be shown en every page
  public assetsShownPerPage: AssetDataCustom[] = [];

  public currentAssetType: string = '';

  @ViewChild(AssetFilterComponent) filterDialog!: AssetFilterComponent;

  constructor(
    private financeService: FinanceService,
    private activatedRoute: ActivatedRoute,
    private filterService: FilterService,
  ) { }

  ngOnInit(): void {

    //default data, I need this data because combineLatest doesnt work until his two observabkes emit one value each one
    /* const paramsDefault: Params = {
      'assetType' : 'stocks'
    }

    const defaultFormData: FilterFormValues = {
      marketCapMoreThan: null,
      marketCapLowerThan: null,
      priceMoreThan: null,
      priceLowerThan: null,
      isEtf: false,
      isFund: false,
    }; */

    combineLatest([
      this.activatedRoute.params
      /* .pipe( */

        //startWith(paramsDefault),
        /* tap((formValues)=>console.log('ssss  ')), */
      /* ) */,
      this.filterService.receiveFormValues()
      /* .pipe( */

        //simepre va a tener valor si viene de filter sino viene no se ejecuta
          /* tap((formValues)=> {
          console.log('ññññ  '+JSON.stringify(formValues));
        }), */
        //filter(formValues => formValues !== null && formValues !== undefined),
        //startWith(defaultFormData),//el problema es q activatedRoute emite un valor despues de filter y se queda con el form defaultFormData
        /* tap((formValues)=>console.log('oopopo  '+JSON.stringify(formValues))), */
      /* ) */
    ]).pipe(
        switchMap(([params, formValues]) => {
          this.financeAssets = [];//this produce that lazyload appear always when the assets are loaded
          //console.log('mmm  '+JSON.stringify(formValues));
          const { assetType } = params;

          if (assetType == 'filter') {
            /* this.filterDialog.filterForm.reset(formValues); */
            this.filterService.saveFilterCurrentValues(formValues);
          } else {
            this.filterService.removeFilterCurrentValues();
          }

          this.filterService.previousFormData = this.filterService.filterValues;
          /* console.log('000  '+assetType+'  '+this.filterService.hasFilterValues); */
          /* if (assetType == 'filter' && this.filterService.hasFilterValues) {
            formValues = this.filterService.filterValues;//si sigo estando en la url /filter se guardan los datos del filtro actual
            this.filterService.previousFormData = this.filterService.filterValues;
            /* console.log('aaaa  '+JSON.stringify(formValues)); */
          /* } else {//sino se vacia el filtro
            if (this.filterService.hasFilterValues) {
              this.filterService.removeFilterCurrentValues();
              this.filterService.previousFormData = this.filterService.defaultValues;
              console.log('cccc  '+JSON.stringify(formValues));
            }

          } */

          //console.log('pppppp  '+JSON.stringify(this.filterService.filterValues));


          this.currentAssetType = assetType;

          return this.financeService.getAssets(assetType, formValues)
            .pipe(
              tap(assetList => this.financeAssets = assetList),
              switchMap(() => this.activatedRoute.queryParamMap)
            )
        })
      ).subscribe(params => {


         /* console.log('lll '+JSON.stringify(this.filterService.filterValues)); */
        this.filterDialog.filterForm.reset(this.filterService.filterValues);//pongo el form filter con los datos q correspondan
        //this.filterDialog.previousFormData = this.filterService.filterValues;

        this.setCurrentPage(params);
        this.divideFinanceAssetsPerPage();
      });
  }

  private setCurrentPage = (params: ParamMap) => {
    const page = params.get('page');
    this.currentPage = page ? +page : 1;
  }

  private divideFinanceAssetsPerPage = () => {
    const startIndex = (this.currentPage - 1) * 20;
    const endIndex = this.currentPage * 20;
    this.assetsShownPerPage = this.financeAssets.slice(startIndex, endIndex);
  }

  public showModal = () => {
    if (!this.filterDialog) return;
    this.filterDialog.showModal();
  }

}


