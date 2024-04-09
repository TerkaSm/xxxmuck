import './style.css';
import { Header } from '../../components/Header/header';

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <div className='hero'>
        <h1 className='hero__title'>Aktuální nabídka</h1>
          <p>Nejnovější prémiové produkty od předních českých designérů
            <br />
            Doprava zdarma až k vám domů, na cenu nehleďte.
          </p>
        </div>
      </main>
    </div>
  );
};
