import BookList from './components/book/BookList';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './components/main/Main.js';
import BookDetail from './components/book/BookDetail.js';
function App() {
  // TODO: Add routes to books & views
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/books" component={BookList} />
        <Route exact path="/books/:id" component={BookDetail} />
      </Switch>
    </div>
  );
}

export default App;
