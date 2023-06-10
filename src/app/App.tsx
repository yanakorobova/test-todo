import { Todolist } from '../components/Todolist/Todolist';
import s from'./App.module.scss';

function App() {
  return (
    <div className={s.app}>
      <header>
        <p>Todos</p>
      </header>
      <Todolist/>
    </div>
  );
}

export default App;
