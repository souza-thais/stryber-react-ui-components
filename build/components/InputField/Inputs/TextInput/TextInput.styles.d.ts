declare const _default: (theme: any) => {
    /** Root Wrapper */
    root: {
        position: string;
        borderRadius: number;
        overflow: string;
        border: string;
        transition: string;
        backgroundColor: any;
        display: string;
        justifyContent: string;
        '&:focus-within': {
            border: string;
            outline: string;
        };
    };
    rootInvalid: {
        border: string;
    };
    rootDisabled: {
        backgroundColor: string;
    };
    /** Input Wrapper */
    input: {
        width: string;
        height: string;
        border: number;
        padding: number;
        paddingLeft: (props: any) => 0 | 16;
        backgroundColor: string;
        transition: string;
        color: any;
        fontFamily: any;
        fontWeight: any;
        fontSize: number;
        '&:focus': {
            color: any;
            outline: string;
        };
        '&::placeholder': {
            color: any;
            fontSize: number;
        };
        '&:disabled': {
            color: string;
        };
    };
    inputWithPlaceholder: {};
    inputWithPlaceholderCollapsed: {
        transform: string;
    };
    inputInvalid: {
        '&:focus': {
            color: string;
        };
    };
};
export default _default;
