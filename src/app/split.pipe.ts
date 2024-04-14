import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    if (!value) {
      return;
    }
    return value.split(".");
  }

}
