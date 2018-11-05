
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyModel } from '../model/currency.model';
import URL_CONFIG from '../config/url.config';
import { URLSearchParams, Http, Headers } from '@angular/http';
import { SearchResultsModel } from '../model/search-results.model';
import 'rxjs/add/operator/map'
@Injectable()
export class CurrencyService {

  constructor(protected http: Http) {
  }
  //get all results
  public filter(currencyModel?: CurrencyModel): Observable<SearchResultsModel[]> {
    if(!currencyModel || (!currencyModel.currency  && ! currencyModel.date))
    {
      return this.findAll();
    } else {
      return this.search(currencyModel);
    }

  }

  public findAll() : Observable<SearchResultsModel[]> {
    let url = URL_CONFIG.FIND_ALL_CURRENCIES;
    let params: URLSearchParams = new URLSearchParams();

    return this.http.get(url, {search: params})
      .map(res => res.json());
  }


  public search(currencyModel: CurrencyModel) : Observable<SearchResultsModel[]> {
    let url = URL_CONFIG.SEARCH;
    let params: URLSearchParams = new URLSearchParams();
    return this.http.post(url, currencyModel, {search: params,headers: this.getHeaders()}).map(res=> res.json());
  }


  private getHeaders(): Headers {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
