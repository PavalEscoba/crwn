import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import './header.component.scss';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => (
  <div className="header">
    <Link to="/" className="logo-wrapper">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      {
        currentUser ? 
          <div className="option" onClick={ () => auth.signOut() }>Sign Out</div> :
          <Link className="option" to="/signin">Sign In</Link>
        
      }
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser 
})

export default connect(mapStateToProps)(Header);