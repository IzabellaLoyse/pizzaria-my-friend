import { Pizza } from 'phosphor-react';
import { ICard } from '../../interfaces/card';
import './style.css';

function Card({ title, description }: ICard) {
  return (
    <section className="card-wrapper">
      <header className="card-header">
        <Pizza size={32} color="#f3ff48" />
        <h3>{title}</h3>
      </header>

      <p>{description}</p>
    </section>
  );
}

export default Card;
