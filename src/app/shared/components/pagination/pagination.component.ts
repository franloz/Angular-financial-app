import { Component, Input, OnInit } from '@angular/core';
import { AssetDataCustom } from '../../../finance/interfaces/asset-data-custom.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {


  @Input() currentPage: number = 1;

  public assetsPerPage: number = 20;

  public pagesNumber: number = 0;

  /* @Input() financeAssets: AssetDataCustom[] = [];// esto no funciona porque a financeAssets se le meten los datos desde una llamada http por lo q es asincrono, asi q cuando se inicia el componente esta vacio
  ngOnInit(): void {
    console.log(this.financeAssets);
    this.calculatePagesNumber(this.financeAssets.length);
  } */

  @Input()//recibimos el array financeAssets desde el componente padre, a financeAssets se le meten los datos desde una llamada http por lo tanto es asincrono y usando el setter cuando financeAssets reciba los datos de la api se recibiran aaqui tmb
  set financeAssets(financeAssets: AssetDataCustom[]) {
    this.calculatePagesNumber(financeAssets.length);
  }

  public calculatePagesNumber = (assetsNumber: number) => {
    this.pagesNumber = Math.ceil(assetsNumber / this.assetsPerPage);
  }

  constructor(
    private router: Router,
  ) {}

  public changePage = (page: number): void => {
    if (page === 1) {
      this.router.navigate([], {
        queryParams : { page : null },
        queryParamsHandling : 'merge'
      })
    } else {
      this.router.navigate([], {
        queryParams : { page },
        queryParamsHandling : 'merge'
      })/* No, this.router.navigate con las opciones proporcionadas no recarga la página completa. Solo actualiza la URL y los parámetros de consulta (query params), sin provocar un refresh completo de la pantalla. Angular gestiona la navegación internamente, por lo que solo las partes de la aplicación que dependen de los parámetros de consulta se actualizarán si es necesario. */
    }
  }
}
