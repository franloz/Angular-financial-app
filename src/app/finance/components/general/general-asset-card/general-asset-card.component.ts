import { Component, Input, OnInit } from '@angular/core';
import { AssetDataCustom } from '../../../interfaces/asset-data-custom.interface';
import { WatchlistService } from '../../../services/watchlist.service';

@Component({
  selector: 'finance-general-asset-card',
  templateUrl: './general-asset-card.component.html',
  styleUrl: './general-asset-card.component.css'
})
export class GeneralAssetCardComponent implements OnInit{

  @Input() asset?: AssetDataCustom;
  public favoriteAssets: string[] = [];
  constructor(
    private watchlistService: WatchlistService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.favoriteAssets = await this.watchlistService.getWatchlist();
  }

  public isFavorite(assetSymbol: string | undefined): string {
    if (!assetSymbol) return 'heart';
    return this.favoriteAssets.includes(assetSymbol) ? 'full_heart' : 'heart';
  }

  public toggleFavorite(assetSymbol: string | undefined) {
    if (!assetSymbol) return;

    // Si el símbolo ya está en la lista de favoritos, lo eliminamos
    if (this.favoriteAssets.includes(assetSymbol)) {
      this.favoriteAssets = this.favoriteAssets.filter(symbol => symbol !== assetSymbol);
    } else {
      // Si no está, lo agregamos
      this.favoriteAssets.push(assetSymbol);
    }

    this.watchlistService.updateWatchlist(assetSymbol);

  }

}
