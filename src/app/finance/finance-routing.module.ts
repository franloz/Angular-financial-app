import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceLayoutComponent } from './layouts/finance-layout/finance-layout.component';
import { MarketPageComponent } from './pages/market-page/market-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';

const routes: Routes = [
  {
    path: '',
    component: FinanceLayoutComponent,
    children: [
      { path: '', component: MarketPageComponent },
      { path: 'portfolio', component: PortfolioPageComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
