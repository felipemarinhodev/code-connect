export type ButtonProps = {
  icon?: React.ReactNode;
} & React.ComponentProps<'button'>

import { ArrowBack } from '../icons/ArrowBack';
import styles from './button.module.css';

export function Button({ children, icon, ...props }: ButtonProps) {
  return <button className={styles.button} {...props}>{children}{icon && icon}</button>;
}
