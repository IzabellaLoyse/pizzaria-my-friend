import { MagnifyingGlass } from 'phosphor-react';
import { IFilter } from '../../interfaces/filter';
import './style.css';

function Filter({ filter, setFilter }: IFilter) {
  const onFilter = (event: any) => {
    const { value } = event.target as unknown as any;
    setFilter(value);
  };

  return (
    <section className="container">
      <h2>Qual pizza esta procurando ?</h2>

      <div className="wrapper-filter">
        <label htmlFor="filter" className="sr-only">
          Pesquisa
        </label>
        <input
          type="search"
          className="input-filter"
          name="filter"
          value={filter}
          onInput={onFilter}
          placeholder="Procurando pela pizza de"
        />
        <MagnifyingGlass size={32} color="#fff" />
      </div>
    </section>
  );
}

export default Filter;
