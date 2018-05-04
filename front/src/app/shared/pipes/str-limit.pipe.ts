import { Pipe, PipeTransform } from '@angular/core';

/**
 * Limit the length of a string
 */
@Pipe({
  name: 'strLimit'
})
export class StrLimitPipe implements PipeTransform {

  transform(value: string, limit = 0, endChar = '...'): string {

    if (limit === 0 || limit > value.length || limit < 0) {
      limit = value.length;
    }


    return value.slice(0, limit) + endChar;
  }

}
