import * as React from "react";
export interface ICheckboxFieldProps {
    name: string;
    value?: any;
    placeholder?: any | React.Component;
    checked?: boolean;
    disabled?: boolean;
    controlled?: boolean;
    onChange?: (e: React.BaseSyntheticEvent) => void;
    onFocus?: (e: React.BaseSyntheticEvent) => void;
    variant?: 'checkmark' | 'switch';
    errorMessage?: string;
    sizeVariant?: 'small' | 'normal' | 'large';
}
declare const PropsWrappedStyledCheckboxField: (props: ICheckboxFieldProps & React.HTMLProps<HTMLInputElement>) => JSX.Element;
/** Exports */
export default PropsWrappedStyledCheckboxField;
export { PropsWrappedStyledCheckboxField as CheckboxField, };
