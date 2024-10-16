import styles from './App.module.scss';
import Container from '../Container';

/**
 * Контейнер всего приложения
 */
function App() {
  return (
    <div className={styles['app']}>
      <Container/>
    </div>
  );
}

export default App;
