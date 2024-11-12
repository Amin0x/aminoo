import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createProduct',
  standalone: true
})
export class CreateProductPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
