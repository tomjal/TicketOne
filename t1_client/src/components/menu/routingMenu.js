import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

// eslint-disable-next-line
const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'active' : ''}>
      <Link to={to}>
        <button className={match ? "btn btn-warning" : "btn btn-default"}>
          {label}
        </button>
      </Link>
    </div>
  )} />
)

export class RoutingMenu extends Component {
  render() {
    return (
      <div>
        <nav>
          {/*<MenuLink activeOnlyWhenExact={true} to="/" label="Dashboard" />
          <MenuLink to="/rooms" label="Rooms" />*/}
        </nav>
      </div>
    );
  }
}
