import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root'
})
export class ApikeyService {

  private readonly localStorageKey = 'apiKey';

  constructor(
    private firestore: Firestore,
    private userService: UserService,
    private encryptionService: EncryptionService,
  ) { }


  public async getApiKeyFinanceFromFb() {

    const refUser =  doc(this.firestore, `users/${this.userService.getUidUserFb()}`);
    const requestData = (await getDoc(refUser)).data();

    if (!requestData) return;

    return requestData['apiKey'];
  }

  //apikey in localstorage
  public async setApiKey() {
    const apikey = await this.getApiKeyFinanceFromFb();
    const encryptedApiKey = this.encryptionService.encrypt(apikey);
    if (encryptedApiKey) localStorage.setItem(this.localStorageKey, encryptedApiKey);
  }

  public getApiKey(): string | undefined {
    const apiKey = localStorage.getItem(this.localStorageKey);
    if (!apiKey) return;
    const desencryptedApiKey = this.encryptionService.decrypt(apiKey);
    return desencryptedApiKey;
  }

  public removeApiKey(): void {
    localStorage.removeItem(this.localStorageKey);
  }

}
