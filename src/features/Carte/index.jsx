import { MenuList } from '../../components/MenuList';
import { SearchBar } from '../../components/SearchBar';
import { MenuFilter } from '../../components/MenuFilter';

export const Carte = () => {
  return (
    <div>
      <SearchBar />
      <MenuFilter />
      <MenuList title="Nos Articles" />
    </div>
  );
};
