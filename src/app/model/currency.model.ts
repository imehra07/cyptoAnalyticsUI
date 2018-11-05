
import { Quotes } from './quotes.model';
export class CurrencyModel {
  id: string;
  currency: string;
  date: string;
  quotes: Quotes[] = [];

}
