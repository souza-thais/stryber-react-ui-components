declare const _default: (theme: any) => {
    root: {
        userSelect: string;
        display: string;
    };
    item: {
        width: number;
        height: number;
        backgroundColor: any;
        fontSize: number;
        color: any;
        borderRadius: number;
        margin: number;
        textAlign: string;
        lineHeight: string;
        cursor: string;
    };
    active: {
        backgroundColor: any;
        color: any;
    };
    disabled: {
        cursor: string;
        pointerEvents: string;
        '&:before': {
            opacity: number;
        };
    };
    widthAuto: {
        width: string;
        padding: string;
    };
    arrow: {
        display: string;
        alignItems: string;
        justifyContent: string;
        '&:before': {
            content: string;
            display: string;
            width: number;
            height: number;
            borderLeft: string;
            borderBottom: string;
            borderRadius: number;
        };
    };
    leftArrow: {
        '&:before': {
            transform: string;
            marginLeft: number;
        };
    };
    rightArrow: {
        '&:before': {
            transform: string;
            marginRight: number;
        };
    };
};
export default _default;
