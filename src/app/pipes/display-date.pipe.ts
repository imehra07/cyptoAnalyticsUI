import {Pipe, PipeTransform} from '@angular/core';
import * as moment from "moment";

@Pipe({name: 'displayDate'})
export class DisplayDate implements PipeTransform {
  transform(value: string) : string {
    if (value == null) { return ""; }
    return moment(value).format('DD-MMM-YY');
  }
}
