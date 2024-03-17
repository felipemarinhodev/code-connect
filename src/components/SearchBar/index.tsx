import { Button } from '../Button';
import { TextField } from '../TextField';
import { SearchIcon } from '../icons/Search';
import styles from './searchbar.module.css';

export function SearchBar() {
  return (
    <form
      className={styles.wrapper}
      action='/'
    >
      <TextField
        name="q"
        placeholder='Digite o que você procura'
        icon={<SearchIcon />}
      />
      <Button>Buscar</Button>
    </form>
  );
}
