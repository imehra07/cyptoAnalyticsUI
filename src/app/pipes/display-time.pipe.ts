import {Pipe, PipeTransform} from '@angular/core';
import * as moment from "moment";

@Pipe({name: 'displayTime'})
export class DisplayTime implements PipeTransform {
  transform(value: string) : string {
    if (value == null) { return ""; }
    return moment(value,'hmm').format('hh:mm A');
  }
}
