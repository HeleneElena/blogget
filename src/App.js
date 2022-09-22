import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';

function App() {
  return (
    <TokenContextProvider value={{}}>
      <AuthContextProvider value={{}}>
        <PostsContextProvider>
          <Header />
          <Main />
        </PostsContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
