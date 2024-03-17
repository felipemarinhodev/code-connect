import { Error as ErrorComponent } from '@/components/Error';
import banner from './error/404.png';

export default function NotFound() {
  return (
    <ErrorComponent
      alt='image of an android thinking'
      src={banner}
      title='OPS! Página não encontrada.'
      subtitle='Você pode voltar ao feed e continuar buscando projetos incríveis!'
    />
  );
}
