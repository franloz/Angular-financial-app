import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FilterFormValues } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private formValues = new BehaviorSubject<FilterFormValues>({/* it is a subject which emit a initial value */
    marketCapMoreThan: null,
    marketCapLowerThan: null,
    priceMoreThan: null,
    priceLowerThan: null,
    isEtf: false,
    isFund: false,
  });

  public defaultValues: FilterFormValues = {
    marketCapMoreThan: null,
    marketCapLowerThan: null,
    priceMoreThan: null,
    priceLowerThan: null,
    isEtf: false,
    isFund: false,
  };

  public filterValues: FilterFormValues = this.defaultValues;

  public previousFormData: FilterFormValues = this.defaultValues ;

  constructor() { }

  public emitFormValues = (filterFormValue: FilterFormValues): void => {
    this.formValues.next(filterFormValue);
  }

  public receiveFormValues = (): Observable<FilterFormValues> => {
    return this.formValues.asObservable();
  }

  public saveFilterCurrentValues = (filterFormValue: FilterFormValues) => {
    this.filterValues = filterFormValue;
    //this.hasFilterValues = true;
  }

  public removeFilterCurrentValues = () => {
    this.filterValues = this.defaultValues ;
    //this.hasFilterValues = false;
  }
}
