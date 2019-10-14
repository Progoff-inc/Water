import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'rateName'})
export class RatePipe implements PipeTransform{
    transform(value: string){
        return this.getValue(value);
        
    }

    getValue(value: string){
        value = value.replace('get-water', 'Водоснабжение');
        value = value.replace('give-water', 'Водоотведение');
        value = value.replace('drink-water', 'Питьевая вода');
        value = value.replace('client', 'для частных лиц');
        value = value.replace('business', 'для орагнизаций');
        value = value.replace('_', ' ');

        return value;
    }
}