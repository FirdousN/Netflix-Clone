import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {action,originals} from './urls'
function App() {
  return (
    <div className="App">
      {/* <h1>hello world</h1> */}
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
