import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {useToken} from './hooks/useToken';
import {tokenContext} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';


function App() {
  const [token, delToken] = useToken('');

  return (
    <tokenContext.Provider value={{token, delToken}}>
      <AuthContextProvider value={{}}>
        <Header token={token} delToken={delToken} />
        <Main />
      </AuthContextProvider>
    </tokenContext.Provider>
  );
}

export default App;
