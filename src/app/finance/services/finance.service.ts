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

   arrayDeDatos: AssetDataCustom[] = [
    {
      name: 'Asset 1',
      symbol: 'SYM1',
      price: 50.25,
      changesPercentage: 1.5,
      marketCap: 1500000000,
      sharesOutstanding: 50000000
    },
    {
      name: 'Asset 2',
      symbol: 'SYM2',
      price: 42.89,
      changesPercentage: -0.8,
      marketCap: 980000000,
      sharesOutstanding: 45000000
    },
    {
      name: 'Asset 3',
      symbol: 'SYM3',
      price: 55.67,
      changesPercentage: 2.1,
      marketCap: 1800000000,
      sharesOutstanding: 60000000
    },
    {
      name: 'Asset 4',
      symbol: 'SYM4',
      price: 37.45,
      changesPercentage: -1.2,
      marketCap: 750000000,
      sharesOutstanding: 40000000
    },
    {
      name: 'Asset 5',
      symbol: 'SYM5',
      price: 48.92,
      changesPercentage: 0.5,
      marketCap: 1200000000,
      sharesOutstanding: 55000000
    },
    {
      name: 'Asset 6',
      symbol: 'SYM6',
      price: 41.75,
      changesPercentage: -0.3,
      marketCap: 880000000,
      sharesOutstanding: 47000000
    },
    {
      name: 'Asset 7',
      symbol: 'SYM7',
      price: 60.10,
      changesPercentage: 3.2,
      marketCap: 2200000000,
      sharesOutstanding: 70000000
    },
    {
      name: 'Asset 8',
      symbol: 'SYM8',
      price: 34.80,
      changesPercentage: -2.5,
      marketCap: 600000000,
      sharesOutstanding: 35000000
    },
    {
      name: 'Asset 9',
      symbol: 'SYM9',
      price: 47.20,
      changesPercentage: 0.8,
      marketCap: 1100000000,
      sharesOutstanding: 52000000
    },
    {
      name: 'Asset 10',
      symbol: 'SYM10',
      price: 39.60,
      changesPercentage: -0.1,
      marketCap: 850000000,
      sharesOutstanding: 48000000
    },
    {
      name: 'Asset 11',
      symbol: 'SYM11',
      price: 44.75,
      changesPercentage: 1.2,
      marketCap: 1050000000,
      sharesOutstanding: 50000000
    },
    {
      name: 'Asset 12',
      symbol: 'SYM12',
      price: 52.40,
      changesPercentage: 1.8,
      marketCap: 1600000000,
      sharesOutstanding: 55000000
    },
    {
      name: 'Asset 13',
      symbol: 'SYM13',
      price: 36.20,
      changesPercentage: -1.5,
      marketCap: 720000000,
      sharesOutstanding: 42000000
    },
    {
      name: 'Asset 14',
      symbol: 'SYM14',
      price: 49.80,
      changesPercentage: 0.3,
      marketCap: 1250000000,
      sharesOutstanding: 56000000
    },
    {
      name: 'Asset 15',
      symbol: 'SYM15',
      price: 43.10,
      changesPercentage: 0.1,
      marketCap: 950000000,
      sharesOutstanding: 49000000
    },
    {
      name: 'Asset 16',
      symbol: 'SYM16',
      price: 57.90,
      changesPercentage: 2.7,
      marketCap: 2000000000,
      sharesOutstanding: 68000000
    },
    {
      name: 'Asset 17',
      symbol: 'SYM17',
      price: 32.55,
      changesPercentage: -3.0,
      marketCap: 550000000,
      sharesOutstanding: 32000000
    },
    {
      name: 'Asset 18',
      symbol: 'SYM18',
      price: 46.75,
      changesPercentage: 0.7,
      marketCap: 1080000000,
      sharesOutstanding: 51000000
    },
    {
      name: 'Asset 19',
      symbol: 'SYM19',
      price: 38.90,
      changesPercentage: -0.5,
      marketCap: 800000000,
      sharesOutstanding: 46000000
    },
    {
      name: 'Asset 20',
      symbol: 'SYM20',
      price: 41.30,
      changesPercentage: -0.2,
      marketCap: 870000000,
      sharesOutstanding: 47000000
    },
    {
      name: 'Asset 21',
      symbol: 'SYM21',
      price: 54.20,
      changesPercentage: 2.3,
      marketCap: 1750000000,
      sharesOutstanding: 59000000
    },
    {
      name: 'Asset 22',
      symbol: 'SYM22',
      price: 35.75,
      changesPercentage: -1.8,
      marketCap: 690000000,
      sharesOutstanding: 41000000
    },
    {
      name: 'Asset 23',
      symbol: 'SYM23',
      price: 58.60,
      changesPercentage: 3.5,
      marketCap: 2300000000,
      sharesOutstanding: 72000000
    },
    {
      name: 'Asset 24',
      symbol: 'SYM24',
      price: 31.90,
      changesPercentage: -3.5,
      marketCap: 520000000,
      sharesOutstanding: 30000000
    },
    {
      name: 'Asset 25',
      symbol: 'SYM25',
      price: 50.60,
      changesPercentage: 1.7,
      marketCap: 1550000000,
      sharesOutstanding: 52000000
    },
    {
      name: 'Asset 26',
      symbol: 'SYM26',
      price: 45.40,
      changesPercentage: 0.9,
      marketCap: 1150000000,
      sharesOutstanding: 53000000
    },
    {
      name: 'Asset 27',
      symbol: 'SYM27',
      price: 37.80,
      changesPercentage: -1.0,
      marketCap: 780000000,
      sharesOutstanding: 44000000
    },
    {
      name: 'Asset 28',
      symbol: 'SYM28',
      price: 43.50,
      changesPercentage: 0.2,
      marketCap: 960000000,
      sharesOutstanding: 50000000
    },
    {
      name: 'Asset 29',
      symbol: 'SYM29',
      price: 39.10,
      changesPercentage: -0.3,
      marketCap: 830000000,
      sharesOutstanding: 49000000
    },
    {
      name: 'Asset 30',
      symbol: 'SYM30',
      price: 51.80,
      changesPercentage: 2.0,
      marketCap: 1650000000,
      sharesOutstanding: 56000000
    },
    {
      name: 'Asset 31',
      symbol: 'SYM31',
      price: 33.20,
      changesPercentage: -2.3,
      marketCap: 600000000,
      sharesOutstanding: 35000000
    },
    {
      name: 'Asset 32',
      symbol: 'SYM32',
      price: 49.10,
      changesPercentage: 0.1,
      marketCap: 1220000000,
      sharesOutstanding: 53000000
    },
    {
      name: 'Asset 33',
      symbol: 'SYM33',
      price: 42.80,
      changesPercentage: -0.1,
      marketCap: 930000000,
      sharesOutstanding: 48000000
    },
    {
      name: 'Asset 34',
      symbol: 'SYM34',
      price: 56.20,
      changesPercentage: 2.5,
      marketCap: 1950000000,
      sharesOutstanding: 67000000
    },
    {
      name: 'Asset 35',
      symbol: 'SYM35',
      price: 29.70,
      changesPercentage: -4.0,
      marketCap: 480000000,
      sharesOutstanding: 28000000
    },
    {
      name: 'Asset 36',
      symbol: 'SYM36',
      price: 48.40,
      changesPercentage: 0.6,
      marketCap: 1150000000,
      sharesOutstanding: 49000000
    },
    {
      name: 'Asset 37',
      symbol: 'SYM37',
      price: 41.20,
      changesPercentage: -0.5,
      marketCap: 850000000,
      sharesOutstanding: 46000000
    },
    {
      name: 'Asset 38',
      symbol: 'SYM38',
      price: 47.90,
      changesPercentage: 0.7,
      marketCap: 1120000000,
      sharesOutstanding: 51000000
    },
    {
      name: 'Asset 39',
      symbol: 'SYM39',
      price: 37.60,
      changesPercentage: -1.2,
      marketCap: 740000000,
      sharesOutstanding: 43000000
    },
    {
      name: 'Asset 40',
      symbol: 'SYM40',
      price: 53.30,
      changesPercentage: 2.2,
      marketCap: 1700000000,
      sharesOutstanding: 58000000
    },
    {
      name: 'Asset 41',
      symbol: 'SYM41',
      price: 34.50,
      changesPercentage: -2.0,
      marketCap: 620000000,
      sharesOutstanding: 36000000
    },
    {
      name: 'Asset 42',
      symbol: 'SYM42',
      price: 59.10,
      changesPercentage: 3.0,
      marketCap: 2100000000,
      sharesOutstanding: 69000000
    },
    {
      name: 'Asset 43',
      symbol: 'SYM43',
      price: 30.80,
      changesPercentage: -3.8,
      marketCap: 500000000,
      sharesOutstanding: 30000000
    },
    {
      name: 'Asset 44',
      symbol: 'SYM44',
      price: 52.70,
      changesPercentage: 1.9,
      marketCap: 1620000000,
      sharesOutstanding: 55000000
    },
    {
      name: 'Asset 45',
      symbol: 'SYM45',
      price: 45.60,
      changesPercentage: 1.0,
      marketCap: 1180000000,
      sharesOutstanding: 54000000
    },
    {
      name: 'Asset 46',
      symbol: 'SYM46',
      price: 38.40,
      changesPercentage: -0.8,
      marketCap: 790000000,
      sharesOutstanding: 45000000
    },
    {
      name: 'Asset 47',
      symbol: 'SYM47',
      price: 44.10,
      changesPercentage: 0.4,
      marketCap: 1020000000,
      sharesOutstanding: 50000000
    },
    {
      name: 'Asset 48',
      symbol: 'SYM48',
      price: 40.90,
      changesPercentage: 0.0,
      marketCap: 900000000,
      sharesOutstanding: 47000000
    },
    {
      name: 'Asset 49',
      symbol: 'SYM49',
      price: 55.40,
      changesPercentage: 2.6,
      marketCap: 1850000000,
      sharesOutstanding: 63000000
    },
    {
      name: 'Asset 50',
      symbol: 'SYM50',
      price: 33.50,
      changesPercentage: -1.5,
      marketCap: 670000000,
      sharesOutstanding: 39000000
    },
    {
      name: 'Asset 51',
      symbol: 'SYM51',
      price: 50.80,
      changesPercentage: 1.8,
      marketCap: 1570000000,
      sharesOutstanding: 53000000
    },
    {
      name: 'Asset 52',
      symbol: 'SYM52',
      price: 43.70,
      changesPercentage: 0.3,
      marketCap: 970000000,
      sharesOutstanding: 49000000
    },
    {
      name: 'Asset 53',
      symbol: 'SYM53',
      price: 36.70,
      changesPercentage: -1.2,
      marketCap: 730000000,
      sharesOutstanding: 42000000
    },
    {
      name: 'Asset 54',
      symbol: 'SYM54',
      price: 48.90,
      changesPercentage: 0.7,
      marketCap: 1210000000,
      sharesOutstanding: 54000000
    },
    {
      name: 'Asset 55',
      symbol: 'SYM55',
      price: 42.10,
      changesPercentage: -0.2,
      marketCap: 910000000,
      sharesOutstanding: 47000000
    },
    {
      name: 'Asset 56',
      symbol: 'SYM56',
      price: 60.20,
      changesPercentage: 3.3,
      marketCap: 2250000000,
      sharesOutstanding: 71000000
    },
    {
      name: 'Asset 57',
      symbol: 'SYM57',
      price: 29.20,
      changesPercentage: -4.5,
      marketCap: 460000000,
      sharesOutstanding: 27000000
    },
    {
      name: 'Asset 58',
      symbol: 'SYM58',
      price: 51.60,
      changesPercentage: 1.5,
      marketCap: 1600000000,
      sharesOutstanding: 55000000
    },
    {
      name: 'Asset 59',
      symbol: 'SYM59',
      price: 34.80,
      changesPercentage: -1.8,
      marketCap: 680000000,
      sharesOutstanding: 40000000
    },
    {
      name: 'Asset 60',
      symbol: 'SYM60',
      price: 47.70,
      changesPercentage: 1.0,
      marketCap: 1160000000,
      sharesOutstanding: 51000000
    },
    {
      name: 'Asset 61',
      symbol: 'SYM61',
      price: 40.20,
      changesPercentage: -0.7,
      marketCap: 830000000,
      sharesOutstanding: 48000000
    },
    {
      name: 'Asset 62',
      symbol: 'SYM62',
      price: 53.90,
      changesPercentage: 2.3,
      marketCap: 1730000000,
      sharesOutstanding: 59000000
    },
    {
      name: 'Asset 63',
      symbol: 'SYM63',
      price: 32.80,
      changesPercentage: -2.0,
      marketCap: 610000000,
      sharesOutstanding: 36000000
    },
    {
      name: 'Asset 64',
      symbol: 'SYM64',
      price: 57.10,
      changesPercentage: 2.3,
      marketCap: 1850000000,
      sharesOutstanding: 63000000
    },
    {
      name: 'Asset 65',
      symbol: 'SYM65',
      price: 29.60,
      changesPercentage: -4.1,
      marketCap: 470000000,
      sharesOutstanding: 28000000
    },
    {
      name: 'Asset 66',
      symbol: 'SYM66',
      price: 50.40,
      changesPercentage: 1.5,
      marketCap: 1560000000,
      sharesOutstanding: 52000000
    },
    {
      name: 'Asset 67',
      symbol: 'SYM67',
      price: 33.40,
      changesPercentage: -1.7,
      marketCap: 660000000,
      sharesOutstanding: 39000000
    },
    {
      name: 'Asset 68',
      symbol: 'SYM68',
      price: 45.90,
      changesPercentage: 1.3,
      marketCap: 1120000000,
      sharesOutstanding: 50000000
    },
    {
      name: 'Asset 69',
      symbol: 'SYM69',
      price: 39.80,
      changesPercentage: -0.5,
      marketCap: 820000000,
      sharesOutstanding: 47000000
    },
    {
      name: 'Asset 70',
      symbol: 'SYM70',
      price: 56.50,
      changesPercentage: 2.9,
      marketCap: 1980000000,
      sharesOutstanding: 67000000
    },
    {
      name: 'Asset 71',
      symbol: 'SYM71',
      price: 28.90,
      changesPercentage: -4.8,
      marketCap: 450000000,
      sharesOutstanding: 26000000
    },
    {
      name: 'Asset 72',
      symbol: 'SYM72',
      price: 52.50,
      changesPercentage: 2.0,
      marketCap: 1680000000,
      sharesOutstanding: 57000000
    },
    {
      name: 'Asset 73',
      symbol: 'SYM73',
      price: 35.40,
      changesPercentage: -1.0,
      marketCap: 710000000,
      sharesOutstanding: 43000000
    },
    {
      name: 'Asset 74',
      symbol: 'SYM74',
      price: 49.70,
      changesPercentage: 1.1,
      marketCap: 1250000000,
      sharesOutstanding: 54000000
    },
    {
      name: 'Asset 75',
      symbol: 'SYM75',
      price: 41.80,
      changesPercentage: 0.2,
      marketCap: 920000000,
      sharesOutstanding: 48000000
    },
    {
      name: 'Asset 76',
      symbol: 'SYM76',
      price: 61.30,
      changesPercentage: 3.7,
      marketCap: 2350000000,
      sharesOutstanding: 74000000
    },
    {
      name: 'Asset 77',
      symbol: 'SYM77',
      price: 27.80,
      changesPercentage: -5.0,
      marketCap: 430000000,
      sharesOutstanding: 25000000
    },
    {
      name: 'Asset 78',
      symbol: 'SYM78',
      price: 54.60,
      changesPercentage: 2.5,
      marketCap: 1800000000,
      sharesOutstanding: 60000000
    },
    {
      name: 'Asset 79',
      symbol: 'SYM79',
      price: 33.20,
      changesPercentage: -2.5,
      marketCap: 640000000,
      sharesOutstanding: 38000000
    },
    {
      name: 'Asset 80',
      symbol: 'SYM80',
      price: 48.00,
      changesPercentage: 0.5,
      marketCap: 1180000000,
      sharesOutstanding: 55000000
    },
    {
      name: 'Asset 81',
      symbol: 'SYM81',
      price: 37.30,
      changesPercentage: -1.3,
      marketCap: 760000000,
      sharesOutstanding: 42000000
    },
    {
      name: 'Asset 82',
      symbol: 'SYM82',
      price: 57.70,
      changesPercentage: 3.0,
      marketCap: 1900000000,
      sharesOutstanding: 68000000
    },
    {
      name: 'Asset 83',
      symbol: 'SYM83',
      price: 31.50,
      changesPercentage: -3.0,
      marketCap: 510000000,
      sharesOutstanding: 31000000
    },
    {
      name: 'Asset 84',
      symbol: 'SYM84',
      price: 51.20,
      changesPercentage: 1.3,
      marketCap: 1620000000,
      sharesOutstanding: 56000000
    },
    {
      name: 'Asset 85',
      symbol: 'SYM85',
      price: 44.20,
      changesPercentage: 0.6,
      marketCap: 1070000000,
      sharesOutstanding: 49000000
    },
    {
      name: 'Asset 86',
      symbol: 'SYM86',
      price: 39.50,
      changesPercentage: -0.4,
      marketCap: 810000000,
      sharesOutstanding: 47000000
    },
    {
      name: 'Asset 87',
      symbol: 'SYM87',
      price: 59.20,
      changesPercentage: 3.2,
      marketCap: 2150000000,
      sharesOutstanding: 71000000
    },
    {
      name: 'Asset 88',
      symbol: 'SYM88',
      price: 30.70,
      changesPercentage: -4.2,
      marketCap: 490000000,
      sharesOutstanding: 29000000
    },
    {
      name: 'Asset 89',
      symbol: 'SYM89',
      price: 50.00,
      changesPercentage: 1.4,
      marketCap: 1520000000,
      sharesOutstanding: 54000000
    },
    {
      name: 'Asset 90',
      symbol: 'SYM90',
      price: 34.20,
      changesPercentage: -2.1,
      marketCap: 660000000,
      sharesOutstanding: 38000000
    },
    {
      name: 'Asset 91',
      symbol: 'SYM91',
      price: 46.30,
      changesPercentage: 0.8,
      marketCap: 1100000000,
      sharesOutstanding: 48000000
    },
    {
      name: 'Asset 92',
      symbol: 'SYM92',
      price: 43.80,
      changesPercentage: 0.2,
      marketCap: 940000000,
      sharesOutstanding: 46000000
    },
    {
      name: 'Asset 93',
      symbol: 'SYM93',
      price: 56.90,
      changesPercentage: 2.7,
      marketCap: 1920000000,
      sharesOutstanding: 66000000
    },
    {
      name: 'Asset 94',
      symbol: 'SYM94',
      price: 28.50,
      changesPercentage: -5.5,
      marketCap: 410000000,
      sharesOutstanding: 24000000
    },
    {
      name: 'Asset 95',
      symbol: 'SYM95',
      price: 53.10,
      changesPercentage: 2.1,
      marketCap: 1700000000,
      sharesOutstanding: 61000000
    },
    {
      name: 'Asset 96',
      symbol: 'SYM96',
      price: 32.90,
      changesPercentage: -1.8,
      marketCap: 630000000,
      sharesOutstanding: 37000000
    },
    {
      name: 'Asset 97',
      symbol: 'SYM97',
      price: 58.00,
      changesPercentage: 3.0,
      marketCap: 1950000000,
      sharesOutstanding: 70000000
    },
    {
      name: 'Asset 98',
      symbol: 'SYM98',
      price: 31.20,
      changesPercentage: -3.2,
      marketCap: 540000000,
      sharesOutstanding: 33000000
    },
    {
      name: 'Asset 99',
      symbol: 'SYM99',
      price: 52.80,
      changesPercentage: 2.3,
      marketCap: 1700000000,
      sharesOutstanding: 60000000
    },
    {
      name: 'Asset 100',
      symbol: 'SYM100',
      price: 47.50,
      changesPercentage: 1.1,
      marketCap: 1140000000,
      sharesOutstanding: 51000000
    }
  ];


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
