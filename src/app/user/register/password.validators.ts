import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";


export class PasswordValidators {

    static checkConfirmPassword(control: AbstractControl): ValidationErrors | null {
        const input = control.get('password')?.value;
        const matchInput = control.get('confirmPassword')?.value;

        if (input !== matchInput){
            control.get('confirmPassword')?.setErrors({not_match: true})
            return { not_match: true };
        }
        return null;
    }
}