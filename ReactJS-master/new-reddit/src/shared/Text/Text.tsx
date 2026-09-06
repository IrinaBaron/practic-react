import React from 'react';
import { generateRandomString } from '../../utils/react/generateRandomIndex';
import styles from './text.css';

export enum EColors {
  black = 'black',
  red = 'red'
}

type TSizes = 28 | 20 | 16 | 14 | 10;

interface ITextProps {
  As ?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'a' | 'li';
  children ?: React.ReactNode;
  size?: TSizes;
  mobileSize?: TSizes;
  tabletSize ?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
  className?: string;
  href?: string;
  id?: string;
  onClick?: (id: string) => void;
}

export function Text(props: ITextProps) {
  const { 
    As = 'span', 
    color = EColors.black, 
    children, 
    size, 
    mobileSize,
    className,
    href,
    id,
    onClick
  } = props;

  return (
    <As className={className} id={id}>
      {children}
    </As>
  );
}
