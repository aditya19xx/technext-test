
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
     <h1>Technext Test</h1>
     <BrowserRouter>
     <Switch>
       <Route path="/home">
         <Home></Home>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
