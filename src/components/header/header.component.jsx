import React from "react";
import {createStructuredSelector} from "reselect";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";

import {auth} from '../../firebase/firebase.utils'

import {HeaderContainer, LogoContainer, OptionContainer, OptionLink} from "./header.styles";


const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"></Logo>
    </LogoContainer>
    <OptionContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contacts">
        CONTACTS
      </OptionLink>
      {
        currentUser ?
          <OptionLink as='div' className="option" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
          :
          <OptionLink to={"signin"}>SIGN IN</OptionLink>
      }
      <CartIcon/>
    </OptionContainer>
    {hidden ? null : <CartDropdown/>}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
