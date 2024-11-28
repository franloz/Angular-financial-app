import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FinanceService } from '../../services/finance.service';
import { AssetDataCustom } from '../../interfaces/asset-data-custom.interface';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { BehaviorSubject, combineLatest, filter, forkJoin, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { AssetFilterComponent } from '../../components/market/asset-filter/asset-filter.component';
import { FilterFormValues } from '../../interfaces';
import { FilterService } from '../../services/market-page-services/filter.service';
import { WatchlistService } from '../../services/watchlist.service';

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
    private watchlistService: WatchlistService,
  ) { }

  ngOnInit(): void {

    combineLatest([
      this.activatedRoute.params,
      this.filterService.receiveFormValues()
    ]).pipe(
      switchMap(([params, formValues]) => {
        this.financeAssets = [];//this produce that lazyload appear always when the assets are loaded
        const { assetType } = params;

        if (assetType == 'filter') {
          this.filterService.saveFilterCurrentValues(formValues);//if tis is /filter save the current values in filterValues
          //it is the same as this.filterService.filterValues = formValues;
        } else {
          this.filterService.removeFilterCurrentValues();
        }

        this.filterService.previousFormData = this.filterService.filterValues;// i use previousFormData to compare in asset-filter if the current form value is different from the previous filtered

        this.currentAssetType = assetType;

        return this.financeService.getAssets(assetType, formValues)
          .pipe(
            tap( assetList => {
              this.financeAssets = assetList;
            }),
            switchMap(() => this.activatedRoute.queryParamMap)
          )
      })
    ).subscribe(async params => {

      const watchListSymbols = await this.watchlistService.getWatchlist();

      if (watchListSymbols) {
        this.financeAssets = this.financeAssets.map(asset => ({
          ...asset,
          favourite: watchListSymbols.includes(asset.symbol)
        }));
      }


      this.filterDialog.filterForm.reset(this.filterService.filterValues);//pongo el form filter con los datos q correspondan
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


