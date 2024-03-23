import styles from './iconbutton.module.css'
export type IconButtonProps = React.ComponentProps<'button'>;

export function IconButton({ children, ...rest }: IconButtonProps) {
  return <button {...rest} className={styles.btn}>{children}</button>;
}
