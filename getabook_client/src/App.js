import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

class App extends Component {
  
  render(){
    return (
      <Router>
        <div>
          <Route exact path = '/' component={ShowBookList} />
          <Route exact path = '/create-book' component={CreateBook} />
          <Route exact path = '/edit-book/:id' component={UpdateBookInfo} />
          <Route exact path = '/show-book/:id' component={ShowBookDetails} />
        </div>
      </Router>
    )
  }

}

export default App;