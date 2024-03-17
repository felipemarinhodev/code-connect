import Link, { LinkProps } from "next/link";

import styles from './link.module.css';

export type LinkComponentProps = {
  children: string;
} & LinkProps

export const LinkComponent = ({ children, ...props }: LinkComponentProps) => {
  return (
    <Link className={styles.link} {...props}>{children}</Link>
  );
}
