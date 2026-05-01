import type * as React from 'react';
import { FunctionComponent } from 'react';
import classNames from 'classnames';

export type CardVariation = 'actionable';

export interface CardProps {
  /**
   * Content to be displayed inside the card
   */
  children?: React.ReactNode;
  /**
   * Additional css class names to be added to the Card element
   */
  className?: string;
  /**
   * A string corresponding to card variation classes.
   */
  variation?: CardVariation;
}

export const Card: FunctionComponent<CardProps> = ({
  children,
  className,
  variation,
}: CardProps) => {
  const variationClass = variation && `ds-c-card--${variation}`;
  const classes = classNames('ds-c-card', variationClass, className);

  return <div className={classes}>{children}</div>;
};

export default Card;
