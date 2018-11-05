import {NgModule} from "@angular/core";
import { ROUTES } from '../app.routes';
import { CurrencyComponent } from './currency.component';
import { RouterModule } from '@angular/router';
import { CurrencyService } from '../service/currency.service';
import { DisplayDate } from '../pipes/display-date.pipe';
import { CurrencyInnerPanelComponent } from './currency-inner-panel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayTime } from '../pipes/display-time.pipe';
import { DatePipe } from '../pipes/date.pipe';

const COMPONENTS = [
  CurrencyComponent, DisplayDate,CurrencyInnerPanelComponent, DisplayTime, DatePipe
  ];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    FormsModule
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    CurrencyService,
    DatePipe
  ]
})

export class CurrencyModule {
  constructor() {
  }
}
