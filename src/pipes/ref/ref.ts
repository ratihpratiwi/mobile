import { Pipe, PipeTransform } from '@angular/core';
import { RefserviceProvider} from "../../providers/refservice/refservice";
@Pipe({
  name: 'ref',
})
export class RefPipe implements PipeTransform {

  constructor(private refservice: RefserviceProvider) { };
  transform(value: number, args) {
    if (value != null) {
      return this.refservice.getRef(value);
    }

  }
}
