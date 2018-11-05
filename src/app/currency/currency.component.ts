import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyService } from '../service/currency.service';
import { CurrencyModel } from '../model/currency.model';
import { Subscription } from 'rxjs';
import { SearchResultsModel } from '../model/search-results.model';
import { DatePipe } from '../pipes/date.pipe';


declare var require: any;
@Component({
  selector: 'currency',
  templateUrl: 'currency.component.html'
})
export class CurrencyComponent implements OnInit, OnDestroy{
  searchResults : SearchResultsModel[] = [];
  searchResultSubscription : Subscription;
  searchCriteria: CurrencyModel = new CurrencyModel;
  selectedDate: Date;
  headers:[{displayName:string,key:string}]=[
    {displayName:'Currency Name',key:'currency'},{displayName:'Profit',key:'profit'}, {displayName:'Date',key:'date'}];
  constructor(private currencyService: CurrencyService, private datePipe: DatePipe) {
  }
  ngOnInit() {
    this.searchResultSubscription = this.currencyService.filter().subscribe(result => {
      this.searchResults= result;
    })
  }

  applyFilter() {

    if(this.selectedDate) {
      this.searchCriteria.date = this.datePipe.transform(this.selectedDate);
      console.log(this.searchCriteria.date);
    }
    this.currencyService.filter(this.searchCriteria).subscribe(result=> this.searchResults = result);
  }

  ngOnDestroy() {
    this.searchResultSubscription.unsubscribe();
  }
  toggle(row) {
    row.expand =!row.expand
  }

}
