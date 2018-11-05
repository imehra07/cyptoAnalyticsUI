import {Pipe, PipeTransform} from '@angular/core';
import * as moment from "moment";

@Pipe({name: 'datePipe'})
export class DatePipe implements PipeTransform {
  transform(value: Date) : string {
    if (value == null) { return ""; }
    let tempdate:Date = new Date(value);
    return moment(tempdate, 'yyyy-mm-dd').format('YYYYMMDD');
  }
}
