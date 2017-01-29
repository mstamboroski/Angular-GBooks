import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighttext'
})
export class HighlightTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let argList = args? args.split(' ') : [];
    if (value === undefined)
      return;
    let values = value.split(' ');
    let result = '';

    for (let v of values) {
      if(v === 'a') {
        result += '<span class="highlighted"> ' + v + '</span>';
      }
      else{
        result += ' ' + v;
      }
    }
    return result;
  }

}
