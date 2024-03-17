'use client' // Error components must be Client Components

import { useEffect } from 'react'

import styles from "./error/error.module.css";
import banner from './error/500.png'
import Link from 'next/link';
import { ArrowBack } from '@/components/icons/ArrowBack';
import Image from 'next/image';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className={styles.wrapper}>
      <Image
        src={banner}
        alt='image of an android thinking'
      />
      <h2 className={styles.title}>Opa! Um erro ocorreu.</h2>
      <p className={styles.subtitle}>Não conseguimos carregar a página, volte para seguir navegando.</p>
      <Link href="/" className={styles.link}>Voltar ao feed<ArrowBack color='#BFFFC3' /></Link>
    </div>
  )
}
