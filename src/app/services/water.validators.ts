import { AbstractControl } from "@angular/forms"

export class WaterValidators{
    public static FileNameValidator(pattern: RegExp = /(\.png|\.jpg)$/i){
        return (control:AbstractControl) => {
            if(!control.value){
                return null
            }
            return pattern
            .test(control.value && control.value.name?control.value.name:control.value)
            ? null : {filename: "неверный формат файла"}
        }
    }
}