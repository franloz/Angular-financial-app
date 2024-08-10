export interface AssetStockScreener {
  symbol:             string;
  companyName:        string;
  marketCap:          number;
  sector:             null;
  industry:           null;
  beta:               null;
  price:              number;
  lastAnnualDividend: number;
  volume:             number;
  exchange:           string;
  exchangeShortName:  string;
  country:            null;
  isEtf:              boolean;
  isFund:             boolean;
  isActivelyTrading:  boolean;
}
