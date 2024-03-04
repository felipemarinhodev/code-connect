import Link from "next/link";

import styles from './link.module.css';

export type LinkProps = {
  href: string;
  children: string;
}

export const LinkComponent = ({ href, children }: LinkProps) => {
  return (
    <Link href={href} className={styles.link}>{children}</Link>
  );
}
