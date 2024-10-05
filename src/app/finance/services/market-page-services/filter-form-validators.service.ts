import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FilterFormValidatorsService {

  constructor() { }

  public compareMarketCapAndPrice = () => {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const marketCapMore = formGroup.get('marketCapMoreThan');
      const marketCapLower = formGroup.get('marketCapLowerThan');
      const priceMore = formGroup.get('priceMoreThan');
      const priceLower = formGroup.get('priceLowerThan');

      // Clear previous errors
      if (marketCapMore?.errors?.['marketCapLowerIsMore']) {
        marketCapMore.setErrors(null);
      }
      if (priceMore?.errors?.['priceLowerIsMore']) {
        priceMore.setErrors(null);
      }

      let hasError = false;

      if (marketCapLower?.value != null && marketCapMore?.value > marketCapLower?.value) {
        formGroup.get('marketCapMoreThan')?.setErrors({ marketCapLowerIsMore : true });
        hasError = true;
      }

      if (priceLower?.value != null && priceMore?.value > priceLower?.value) {
        formGroup.get('priceMoreThan')?.setErrors({ priceLowerIsMore : true });
        hasError = true;
      }

      return hasError ? { validationError: true } : null;


    }

  }
}
