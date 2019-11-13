import { PipeTransform, Pipe } from '@angular/core';
import { DocTypes } from '../models';

@Pipe({name: 'docName'})
export class DocPipe implements PipeTransform{
    transform(value: string){
        return this.getValue(value);
        
    }

    getValue(value: string){
        switch (value){
            case DocTypes.RefBook:{
                return 'Справочник абонента';
            }
            case DocTypes.RatesPay:{
                return 'Тарифы';
            }
            case DocTypes.RatesConnect:{
                return 'Тарифы на подключение';
            }
            case DocTypes.Props:{
                return 'Реквизиты';
            }
            case DocTypes.Constituent:{
                return 'Учредительные документы';
            }
            case DocTypes.Bookkeeping:{
                return 'Бухгалтерская отчетность';
            }
            case DocTypes.Allowing:{
                return 'Разрешительная документация';
            }
            case DocTypes.Evaluation:{
                return 'Специальная оценка условий труда';
            }
            case DocTypes.Orders:{
                return 'Распоряжения';
            }
            case DocTypes.VZU:{
                return 'Свободные мощности ВЗУ';
            }
            case DocTypes.Single:{
                return 'Индивидуальный';
            }
            default:{
                return value;
            }
        }
    }
}