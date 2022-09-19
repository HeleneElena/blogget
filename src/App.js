import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {useToken} from './hooks/useToken';

function App() {
  const [token, delToken] = useToken('');

  return (
    <>
      <Header token={token} delToken={delToken} />
      <Main />
    </>
  );
}

export default App;
