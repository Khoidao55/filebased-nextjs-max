import React from 'react';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import Link from 'next/link';
import classes from './Button.module.css';

interface Props {
  children: React.ReactNode,
  link: string
}

const Button: React.FC<Props> = ({ children, link }) => {
  return (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
      </Link>
  )
}

export default Button;