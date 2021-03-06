import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './Pagination.styles';
import classNames from 'classnames';

interface IPaginationProps {
  currPage: number;
  pageCount: number;
  onChange: (index: number)=> void;
  collapseFactor?: number;
  className?: string;
}

const Pagination: React.FC<IPaginationProps & WithStyles<typeof styles>> = (props) => {
  const {
    onChange,
    collapseFactor,
    currPage,
    pageCount,
    className,
    classes
  } = props;

  const onClick = (index: number) => {
    if (index !== currPage) {
      onChange(index);
    }
  };

  const getItem = (active: boolean, index: number, label: number | string, key?: number | string) => (
    <div
      key={key}
      className={classNames(classes.item, {
        [classes.widthAuto]: label > 999,
        [classes.active]: active
      })}
      onClick={()=> {onClick(index)}}
    >
      {label}
    </div>
  );

  const getItems = (items: number[]) =>
    items.map(index =>
      getItem(index === currPage, index, index + 1, index));

  const getAllItems = () => getItems(Array.from(Array(pageCount).keys()));

  const getCollapsedItems = (collapseFactor: number) => {
    const collapseBefore = currPage - collapseFactor - 2 > 0;
    const collapseAfter = currPage + collapseFactor + 1 < pageCount - 2;
    const itemsBefore = collapseBefore ? currPage - collapseFactor : currPage - collapseFactor - 1;
    const itemsAfter = collapseAfter ? currPage + collapseFactor : currPage + collapseFactor + 1;
    const itemsValues = Array.from(Array(pageCount).keys()).filter(num =>
        num >= itemsBefore
        && num <= itemsAfter
        && num > 0
        && num < pageCount - 1
      );
    return (
      <>
        {getItem(currPage === 0, 0, 1)}
        {collapseBefore && getItem(false, currPage - collapseFactor - 1, '...')}
        {getItems(itemsValues)}
        {collapseAfter && getItem(false, currPage + collapseFactor + 1, '...')}
        {getItem(currPage === pageCount - 1, pageCount - 1, pageCount)}
      </>
    )
  };

  if (pageCount <= 1) {
    return getItem(true, 0, 1);
  }

  return (
    <div className={classNames(classes.root, className)}>
      <div
        onClick={()=>{onClick(currPage - 1)}}
        className={classNames(
          classes.item,
          classes.arrow,
          classes.leftArrow,
          {[classes.disabled]: currPage === 0}
        )}
      />
      {collapseFactor ? getCollapsedItems(collapseFactor) : getAllItems()}
      <div
        onClick={()=>{onClick(currPage + 1)}}
        className={classNames(
          classes.item,
          classes.arrow,
          classes.rightArrow,
          {[classes.disabled]: currPage === pageCount - 1}
        )}
      />
    </div>
  );
};

const StyledPagination = withStyles(styles)(Pagination);
const PropsWrappedStyledPagination = (props: IPaginationProps) => <StyledPagination {...props} />;

export default PropsWrappedStyledPagination;
export { PropsWrappedStyledPagination as Pagination };
