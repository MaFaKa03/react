
import { Provider } from 'react-redux';
import  store  from './store';
import FetchButton from './components/FetchButton';

function App() {
  return (
    <Provider store={store}>
      <FetchButton/>
    </Provider>
  );
}

export default App;
