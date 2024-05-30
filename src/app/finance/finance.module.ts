import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { LayoutComponent } from './layouts/layout.component';
import { WatchlistPageComponent } from './pages/watchlist-page/watchlist-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { MarketPageComponent } from './pages/market-page/market-page.component';
import { AssetPageComponent } from './pages/asset-page/asset-page.component';


@NgModule({
  declarations: [
    LayoutComponent,
    PortfolioPageComponent,
    WatchlistPageComponent,
    WatchlistPageComponent,
    PortfolioPageComponent,
    MarketPageComponent,
    AssetPageComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule
  ]
})
export class FinanceModule { }
