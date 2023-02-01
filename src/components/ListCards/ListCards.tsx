import { useState } from 'react';
import data from '../../db/data.json';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import './style.css';

function ListCards() {
  const [search, setSearch] = useState('');

  const filteredCards =
    search.length > 0
      ? data.filter((item) => {
          const titleLowerCase = item.title.toLowerCase();
          return titleLowerCase.includes(search);
        })
      : [];

  return (
    <main>
      <Filter filter={search} setFilter={setSearch} />

      {search.length > 0 ? (
        <ul className="cards">
          {filteredCards.map((card) => (
            <li className="card" key={card.id}>
              <Card title={card.title} description={card.description} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="cards">
          {data.map((card) => (
            <li className="card" key={card.id}>
              <Card title={card.title} description={card.description} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default ListCards;
