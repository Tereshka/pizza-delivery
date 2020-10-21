import React, { useContext } from 'react';
import { Context } from '../../context/Context';

import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
} from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CurrencySelector from './CurrencySelector';

function Header() {
  const { state } = useContext(Context);
  const badgeContent = state.order.length === 0 ? 0 : state.order.map(el => el.count).reduce((acc, cur) => acc + cur);

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{color: 'inherit', flexGrow: 1, textDecoration: 'none'}}>
          <Typography variant="h6" style={{}}>
            Pizza Delivery
          </Typography>
        </Link>
        
        <CurrencySelector />
        <Button color="inherit">Login</Button>
        <Link to="/cart" style={{color: 'inherit'}}>
          <IconButton edge="end" color="inherit" aria-label="go to cart">
            <Badge badgeContent={badgeContent} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Link>
        
      </Toolbar>
    </AppBar>
  );
}

export default Header;