import { Injectable } from '@angular/core';
import { UserService } from '../../auth/services/user.service';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  private _refUser = doc(this.firestore, `watchlist/${this.userService.getUidUserFb()}`);
  constructor(
    private firestore: Firestore,
    private userService: UserService
  ) { }

  public async getWatchlist(): Promise<string[]> {

    const docSnap = await getDoc(this._refUser);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return data['assets'] || [];
    }
    return [];
  }

  public updateWatchlist = async (assetSymbol: string | undefined): Promise<number> => {
    if (!assetSymbol) return 0;

    let assetSymbols = await this.getWatchlist();
    if (!assetSymbols) return 0;

    // Verificar si el símbolo ya existe y actualizar la lista
    if (assetSymbols.includes(assetSymbol)) {
      assetSymbols = assetSymbols.filter(symbol => symbol !== assetSymbol);
    } else {
      assetSymbols.push(assetSymbol);
    }

    try {
      await setDoc(this._refUser, { assets: assetSymbols }, { merge: true });
      console.log('Watchlist actualizada exitosamente');
      return 1;
    } catch (error) {
      console.error('Error al actualizar la watchlist:', error);
      return 0;
    }
  }
}
