import { Pizza } from 'phosphor-react';
import './style.css';

function Header() {
  return (
    <header className="header">
      <Pizza size={32} color="#f3ff48" />
      <h1>Pizzaria My Friend</h1>
    </header>
  );
}

export default Header;
