import styles from './textarea.module.css';
export type TextareaProps = React.ComponentProps<'textarea'>

export const Textarea = ({ ...rest }: TextareaProps) => {
  return (
    <textarea className={styles.textarea} {...rest} />
  );
}
