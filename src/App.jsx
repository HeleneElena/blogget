import Header from './components/Header';
import Main from './components/Main';

import {useToken} from './hooks/useToken';
import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';

function App() {
  const [token, delToken] = useToken('');

  return (
    <TokenContextProvider token={token} delToken={delToken}>
      <AuthContextProvider>
        <Header />
        <Main />
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
