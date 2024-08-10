export interface FilterFormValues {
  marketCapMoreThan:  number | null;
  marketCapLowerThan: number | null;
  priceMoreThan:      number | null;
  priceLowerThan:     number | null;
  isEtf:              boolean;
  isFund:             boolean;
  /* sectors:            string[];
  countries:          string[]; */
}
