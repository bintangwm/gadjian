// import logo from './logo.svg';
import './App.css';
// import './style/css/main.css';
import { Provider } from 'react-redux';
import store from './store';
import PersonnelList from './pages/Personnels';
import {
  Navbar,
  Sidebar
} from './components';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //   </header>
    // </div>
    <Provider store={ store }>
      <Navbar/>
      <div className="main-content">
        <Sidebar/>
        <PersonnelList/>
      </div>
    </Provider>
  );
}

export default App;
