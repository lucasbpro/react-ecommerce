import React from 'react';
import './App.scss';

//import { } from "./utils";
import Catalog from '../components/Catalog';
import Topbar from '../components/Topbar';
import {URL_API} from "../constants";

class App extends React.Component {

  // App constructor - start props and App state (this.state)
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      allProducts: [],
      filteredContacts: []
    };

    //this.handleFilter = this.handleFilter.bind(this);
  }

  // this is run right before the page loads the App component
  componentDidMount() {
    fetch(URL_API).then((response) => response.json())
      .then(
        // in case API returns data
        (result) => {
          this.setState({
            isLoaded: true,
            allProducts: result
          });
        },
        // in case an error occurs
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  // Render method: renders the App component 
  render() {
    return (
      <React.Fragment>
        <div data-testid="app" className="app">

          <Topbar/>
          <Catalog data={this.state.allProducts}/>

        </div>
      </React.Fragment>
    )
  }
}

export default App;
