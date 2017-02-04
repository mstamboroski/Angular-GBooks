import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'


@Pipe({
  name: 'highlighttext',
  pure: false
})
export class HighlightTextPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {}
  
  transform(text: any, search): any {
    if (!(typeof text === 'string')) return;
    var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    pattern = pattern.split(' ').filter((t) => {
      return t.length > 0;
    }).join('|');
    var regex = new RegExp(pattern, 'gi');

    return search ? 
                  this.sanitized.bypassSecurityTrustHtml(text.replace(regex, (match) => `<span style="background-color:yellow">${match}</span>`))
                  : text;
  }

}
