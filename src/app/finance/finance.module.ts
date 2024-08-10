import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { WatchlistPageComponent } from './pages/watchlist-page/watchlist-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { MarketPageComponent } from './pages/market-page/market-page.component';
import { AssetPageComponent } from './pages/asset-page/asset-page.component';
import { FinanceLayoutComponent } from './layouts/finance-layout/finance-layout.component';
import { AuthModule } from '../auth/auth.module';
import { GeneralAssetCardComponent } from './components/general/general-asset-card/general-asset-card.component';
import { PortfolioAssetCardComponent } from './components/portfolio/portfolio-asset-card/portfolio-asset-card.component';
import { SharedModule } from '../shared/shared.module';
import { AssetTypesComponent } from './components/market/asset-types/asset-types.component';
import { RouterModule } from '@angular/router';
import { AssetFilterComponent } from './components/market/asset-filter/asset-filter.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PortfolioPageComponent,
    WatchlistPageComponent,
    WatchlistPageComponent,
    PortfolioPageComponent,
    MarketPageComponent,
    AssetPageComponent,
    FinanceLayoutComponent,
    GeneralAssetCardComponent,
    PortfolioAssetCardComponent,
    AssetTypesComponent,
    AssetFilterComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    AuthModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class FinanceModule { }
