import { AbstractControl } from "@angular/forms"

export class WaterValidators{
    public static FileNameValidator(pattern: RegExp = /(\.png|\.jpg)$/i){
        return (control:AbstractControl) => {
            return pattern.test(control.value.name)? null : {filename: "неверный формат файла"}
        }
    }
}