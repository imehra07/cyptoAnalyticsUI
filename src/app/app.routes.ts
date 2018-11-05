import {Routes} from "@angular/router";

import { CurrencyComponent } from './currency/currency.component';


export const ROUTES: Routes = [
   {path: '', component: CurrencyComponent},
   {path: '**', component: CurrencyComponent}
];
