import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CurrencyService } from '../service/currency.service';
import { CurrencyModel } from '../model/currency.model';
import { Subscription } from 'rxjs';
import { SearchResultsModel } from '../model/search-results.model';
import { Quotes } from '../model/quotes.model';
declare var require: any;
@Component({
  selector: 'currency-inner-panel',
  templateUrl: 'currency-inner-panel.component.html'
})
export class CurrencyInnerPanelComponent{
  @Input() quotes : Quotes[] = [];
  headers:[{displayName:string,key:string}]=[
    {displayName:'Buy/Sell',key:'type'},{displayName:'Price',key:'price'},{displayName:'Time',key:'time'}];
  constructor() {
  }
}
