// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import PersonnelList from './pages//PersonnelList';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //   </header>
    // </div>
    <Provider store={ store }>
      <PersonnelList/>
    </Provider>
  );
}

export default App;
