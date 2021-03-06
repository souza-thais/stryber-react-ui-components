import * as React from "react";
import { useState, MouseEvent } from "react";
import withStyles, { WithStyles } from "react-jss";
import classNames from "classnames";
import styles from "./ButtonsSet.styles";
import { Button } from "../Button";
/** Interfaces */
export interface IButtonsData {
  label: string;
  onClick: any
}

export interface IButtonsSetProps extends React.HTMLProps<HTMLDivElement> {
  className?: any;
  buttonsData: IButtonsData[];
  active?: number;
  width?: number;
}

const DEFAULT_BUTTON_WIDTH = 71;
/** Main component */
const ButtonsSet = (props: IButtonsSetProps & WithStyles<typeof styles>) => {
  const { classes, width, className, buttonsData, active = 0, ...rest } = props;
  const [activeIdx, setActiveIdx] = useState<number>(active);
  const buttonWidth = width || DEFAULT_BUTTON_WIDTH;

  const handleClick = (idx: number, onClick: (e?: MouseEvent<HTMLButtonElement>) => {} | null, e: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
    setActiveIdx(idx);
  };

  const renderButtons = () =>
    buttonsData.map(({ label, onClick = () => {} }, idx) => (
      <Button
        key={idx}
        onClick={(e: MouseEvent<HTMLButtonElement>) => handleClick(idx, onClick, e)}
        sizeVariant="mini"
        className={classNames([
          classes.button,
          idx === activeIdx && classes.active
        ])}
        style={{width: `${buttonWidth}px`}}
        variant="secondary"
      >
        {label}
      </Button>
    ));

  return (
    <div className={classNames([classes.root, className])} {...rest}>
      <div style={{left: buttonWidth * activeIdx, width: `${buttonWidth}px`}} className={classes.background}/>
      {renderButtons()}
    </div>
  );
};

/** Wrappings */
const StyledButtonsSet = withStyles(styles)(ButtonsSet);
const PropsWrappedStyledBadge = (props: IButtonsSetProps) => (
  <StyledButtonsSet {...props} />
);

/** Exports */
export default PropsWrappedStyledBadge;
export { PropsWrappedStyledBadge as ButtonsSet };
