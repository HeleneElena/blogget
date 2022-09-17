import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {useToken} from './hooks/useToken';

function App() {
  const [token] = useToken('');

  return (
    <>
      <Header token={token} />
      <Main />
    </>
  );
}

export default App;
