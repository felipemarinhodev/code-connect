'use client' // Error components must be Client Components

import { useEffect } from 'react';

import { Error as ErrorComponent } from '@/components/Error';
import banner from './error/500.png';

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
    <ErrorComponent
      alt='image of an android thinking'
      src={banner}
      title='Opa! Um erro ocorreu.'
      subtitle='Não conseguimos carregar a página, volte para seguir navegando.'
    />
  )
}
