import * as React from 'react';
/** Interfaces */
export interface ISearchFieldProps {
    className?: string;
    placeholder?: string;
    collapsiblePlaceholder?: boolean;
    value?: string;
    disabled?: boolean;
    onChange?: (value: any) => void;
    onFocus?: (e: React.BaseSyntheticEvent) => void;
    onBlur?: (e: React.BaseSyntheticEvent) => void;
    sizeVariant?: 'normal' | 'mini' | 'micro';
}
declare const PropsWrappedStyledSearchField: (props: ISearchFieldProps) => JSX.Element;
/** Exports */
export default PropsWrappedStyledSearchField;
export { PropsWrappedStyledSearchField as SearchField, };
