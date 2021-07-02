
import './App.css';

import Header from './compnents/Header';

import { BrowserRouter as Router, Switch , Route } from "react-router-dom";

import ProductComponent from './compnents/ProductComponent';
import ProductDetails from './compnents/ProductDetails';
import ProductsListing from './compnents/ProductsListing';

function App() {
  return (
    <div>
        <Router>

          <Header/>

          <Switch>
            <Route path="/" exact component={ProductsListing} />
            <Route path="/product/:productId" exact component={ProductDetails} />
            <Route>404, Not Found </Route>
          </Switch>

        </Router>

    </div>
  );
}

export default App;
