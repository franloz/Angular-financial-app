import { Injectable } from '@angular/core';
import { WarningColors, WarningMessages, WarningIcons } from '../enums';
import { Warning, WarningCheck } from '../interfaces/warning-checks.interface';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public spacesPattern: RegExp = /^[^\s]+$/;
  public emailPattern: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  //A pattern for password validation that combines all validation rules
  public passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#%&*()_+=-?!¿¡])(?!.*\s).+$/;

  //Password: validation patterns for the view / i put them with regex to can use test()
  public passwordHasLowerCasePattern: RegExp = /^(?=.*[a-z]).+$/;
  public passwordHasUpperCasePattern: RegExp = /^(?=.*[A-Z]).+$/;
  public passwordHasNumberPattern: RegExp = /\d/;
  public passwordHasSpecialPattern: RegExp = /^(?=.*[@$#%&*()_+=-?!¿¡]).+$/;
  public numCharactersPattern: RegExp = /^.{8,}$/;

  constructor() { }

  public validatePasswordPattern = ( passwordValue: string ): Warning[] | null  => {

    if (!passwordValue) return null;

    const warningChecks: WarningCheck[] = [
      {
        test: this.passwordHasLowerCasePattern,
        warning: {
          icon: WarningIcons.XMark,
          message: WarningMessages.LowerCase,
          classColor: WarningColors.Red
        }
      },
      {
        test: this.passwordHasUpperCasePattern,
        warning: {
          icon: WarningIcons.XMark,
          message: WarningMessages.UpperCase,
          classColor: WarningColors.Red
        }
      },
      {
        test: this.passwordHasNumberPattern,
        warning: {
          icon: WarningIcons.XMark,
          message: WarningMessages.Number,
          classColor: WarningColors.Red
        }
      },
      {
        test: this.passwordHasSpecialPattern,
        warning: {
          icon: WarningIcons.XMark,
          message: WarningMessages.SpecialCharacter,
          classColor: WarningColors.Red
        }
      },
      {
        test: this.spacesPattern,
        warning: {
          icon: WarningIcons.XMark,
          message: WarningMessages.NoSpaces,
          classColor: WarningColors.Red
        }
      },
      {
        test: this.numCharactersPattern,
        warning: {
          icon: WarningIcons.XMark,
          message: WarningMessages.Length,
          classColor: WarningColors.Red
        }
      }
    ];

    warningChecks.forEach((check) => {
      if (check.test.test(passwordValue)) {
        check.warning.icon = WarningIcons.CheckMark;
        check.warning.classColor = WarningColors.Green;
      }
    });

    return warningChecks.map((check) => check.warning);
  }

  public comparePasswordFields = (password1: string, password2: string) => {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const password1Value = formGroup.get(password1)?.value;
      const password2Value = formGroup.get(password2)?.value;

      if (password1Value !== password2Value) {//if they are not equal set an error in password2 field and return an error for the validation
        formGroup.get(password2)?.setErrors({ notEqual : true });
        return { notEqual : true };
      }

      //if it doesnt enter in the if, mean they are equal
      //formGroup.get(password2)?.setErrors(null); //delete previous errors in password2 field I comment this because It delete required error too
      return null;
    }
  }

  public testApikey = (  ) => {

  }
}
