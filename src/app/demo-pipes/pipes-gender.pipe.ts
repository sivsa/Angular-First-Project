import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesGender'
})
export class PipesGenderPipe implements PipeTransform {

  transform(value: number, optionalValue: string): string {
    if(value == 1) 
      return "Male " + optionalValue
    else
      return "Female " + optionalValue
  }

}
