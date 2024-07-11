import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../services/finance.service';
import { AssetDataCustom } from '../../interfaces/asset-data-custom.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  templateUrl: './market-page.component.html',
  styleUrl: './market-page.component.css'
})
export class MarketPageComponent implements OnInit{

  public financeAssets: AssetDataCustom[] = [];
  //actual page for pagination
  public currentPage: number = 1;
  //array with assets which it will be shown en every page
  public assetsShownPerPage: AssetDataCustom[] = [];

  constructor(
    private financeService: FinanceService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    //get assets
    this.financeService.getAssets()
      .pipe(
        switchMap(assetList => {
          this.financeAssets = assetList;
          return this.activatedRoute.queryParamMap;
        })
      )
      .subscribe(params => {
        this.setCurrentPage(params);
        this.divideFinanceAssetsPerPage();
      });
  }

  private setCurrentPage = (params : ParamMap) => {
    const page = params.get('page');
    this.currentPage = page ? +page : 1;
  }

  private divideFinanceAssetsPerPage = () => {
    const startIndex = (this.currentPage-1)*20;
    const endIndex = this.currentPage*20;
    this.assetsShownPerPage = this.financeAssets.slice(startIndex, endIndex);
  }

}
