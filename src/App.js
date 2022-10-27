import { Provider } from 'react-redux';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import appStore from './redux/store';

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </Provider>
    
  );
}

export default App;
