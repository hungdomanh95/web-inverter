import logo from './logo.svg';
import './App.css';
import {Arr} from './components/ListData'
function App() {
  return (
    <div className="App">
      {Arr.LIST_ITEMS.map((item,index)=>{
        return(
          <div>{item.name}</div>
        )
      })}
    </div>
  );
}

export default App;
