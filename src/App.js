import './App.css';
import Home from './Home';  
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage'
import { Route, Switch } from 'wouter';

function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/search" component={SearchPage} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;