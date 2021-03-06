
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
     <h1>Technext Test</h1>
     <BrowserRouter>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route>
         <Footer></Footer>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
