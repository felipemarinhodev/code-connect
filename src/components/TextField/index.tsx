import React from 'react';
import styles from './textfield.module.css';

export type TextFieldProps = {
  icon?: React.ReactNode
}

export function TextField({ icon }: TextFieldProps) {
  return (
    <div className={styles.wrapper}>
      {icon && icon}
      <input placeholder='Digite o que você procura' />
    </div>
  );
}
