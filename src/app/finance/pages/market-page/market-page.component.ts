import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../services/finance.service';
import { AssetDataCustom } from '../../interfaces/asset-data-custom.interface';

@Component({
  templateUrl: './market-page.component.html',
  styleUrl: './market-page.component.css'
})
export class MarketPageComponent implements OnInit{


  //la llamada a la api se va a hacer cada vez q se acceda a esta pagina, lo cual consume llamadas api pero si no lo hago no se podra ver el precio a tiempo casi real a no ser q actualice a mano el user, ver si api devuelve el precio actual o el del dia anterior si es el del dia anterior q haga solo una vez esta consulta y lo guarde en localstorage

  //llamada para sacar los q sean por capitalizacion y luego con eso obtengo los codigos y obtengo sus valores

  public financeAssets: AssetDataCustom[] = [];

  constructor(
    private financeService: FinanceService,
  ) {}


  ngOnInit(): void {
    this.financeService.getAssets()
      .subscribe(asset => {
        this.financeAssets = asset;
      });
  }
///!como hago la paginacion




}
