import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Image, LinkingWrapper } from './Header.styles';
import Home from '../Home/Home';
import logo from '../../assets/camera_icon.png';


const Header = () => (
  <Router>
      <LinkingWrapper>
        <div id="header">
          <Image>
            <img class="Logo" src={logo} alt="Logo" />
          </Image>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="selected">Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
            </li>
            <li>
              <NavLink exact to="/cart" activeClassName="selected">Cart</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/catalog">
          </Route>
          <Route path="/cart">
          </Route>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
        </Switch>
      </LinkingWrapper>
  </Router>
);

export default Header;