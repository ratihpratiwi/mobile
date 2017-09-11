import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyLabelProvider} from '../../providers/currency-label/currency-label';
@Pipe({
  name: 'currencyLabel',
})
export class CurrencyLabelPipe implements PipeTransform {

  constructor(private currencyLabelService: CurrencyLabelProvider) { };
  transform(value: number, args) {
    if (value != null) {
      return this.currencyLabelService.getCurrency(value)
    }

  }
}
