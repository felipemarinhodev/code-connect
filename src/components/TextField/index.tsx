import React from 'react';
import styles from './textfield.module.css';

export type TextFieldProps = {
  icon?: React.ReactNode
} & React.ComponentProps<'input'>

export function TextField({ icon, type = 'text', ...props }: TextFieldProps) {
  return (
    <div className={styles.wrapper}>
      {icon && icon}
      <input type={type} {...props} />
    </div>
  );
}
