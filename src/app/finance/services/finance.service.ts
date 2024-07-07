import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { AssetNasdaq } from '../interfaces/asset-nasdaq.interface';
import { ApikeyService } from '../../auth/services/apikey.service';
import { AssetData } from '../interfaces/asset-data.interface';
import { AssetDataCustom } from '../interfaces/asset-data-custom.interface';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private readonly _apiUrl: string = 'https://financialmodelingprep.com/api/v3/';

  constructor(
    private http: HttpClient,
    private apiKey: ApikeyService,
  ) { }

  /* public get apiKeyFinance() {
    return this._apiKeyFinance;
  } */


  //todo. getAssetsByMarketCap()
  //? 1. consulta por capitalizacion
  //? 2. obtener ticket asstes en un array y convertirlo a string separado por comas

  //todo. getDataAssets()
  //? 1. hacer consulta con string de tickets y meterlo en financeAssets[]



  public getAssetSymbolList = (): Observable<string> => {
    return this.http.get<AssetNasdaq[]>(`${this._apiUrl}nasdaq_constituent?apikey=${this.apiKey.getApiKey()}`)
      .pipe(
        map(assetList => assetList.map(asset => asset.symbol).join()),
        catchError(() => of(''))
      );
  }

  public getAssetDataList = (assetSymbolList: string): Observable<AssetDataCustom[]> => {
    if(!assetSymbolList) return of([]);
    return this.http.get<AssetData[]>(`${this._apiUrl}quote/${assetSymbolList}?apikey=${this.apiKey.getApiKey()}`)
      .pipe(
          map(assetList => assetList.map(({ name, symbol, price, changesPercentage, marketCap, sharesOutstanding }) => ({
            name,
            symbol,
            price,
            changesPercentage,
            marketCap,
            sharesOutstanding,
          }),
          catchError(() => of([]))
        )),
      );
  }

  public getAssets = (): Observable<AssetDataCustom[]> => {
    return this.getAssetSymbolList()
      .pipe(
        switchMap(asset => this.getAssetDataList(asset)),
      );
  }












}
