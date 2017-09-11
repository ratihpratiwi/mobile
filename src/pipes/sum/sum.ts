import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'sum',
  pure: false
})
export class SumPipe implements PipeTransform {
  transform(p: any, args) {
    switch (args) {
      case "rqo":
        if (p != null) {
          return p.reduce((a, item) => a + (item.est_unit_price * item.trn_reqo_dtl_qty), 0);
        }
        break;
      case "poc":
        break;
      default:
        return p.reduce((a, item) => a + item, 0);
    }

  }

}
