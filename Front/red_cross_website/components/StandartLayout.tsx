import React from 'react';
import clsx from 'clsx';
import { withChildren, withClassName } from '../config/withs';

export default function StandartLayout({ children, className = '' }: StandartLayoutProps) {
  return (
    <div className={clsx('h-full w-full', className)}>
      {children}
    </div>
  );
}

export interface StandartLayoutProps extends withChildren, withClassName {}
