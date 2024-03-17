import { Button } from '../Button';
import { TextField } from '../TextField';
import { SearchIcon } from '../icons/Search';
import styles from './searchbar.module.css';

export function SearchBar() {
  return (
    <section className={styles.wrapper}>
      <TextField
        icon={<SearchIcon />}
      />
      <Button>Buscar</Button>
    </section>
  );
}
