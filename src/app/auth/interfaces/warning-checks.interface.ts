import { WarningColors, WarningMessages, WarningIcons } from '../enums';

export interface WarningCheck {
  test: RegExp;
  warning: Warning
}

export interface Warning {
    icon: WarningIcons;
    message: WarningMessages;
    classColor: WarningColors;
}
