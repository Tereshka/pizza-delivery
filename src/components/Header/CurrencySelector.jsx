import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../../context/Context';
import { CURRENCY } from '../../context/reducer';
import { UPDATE_CURRENCY } from '../../context/types';

import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'inherit',
    // border: '1px',
    borderColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    '&$selected': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      fontWeight: 'bold',
    },
  },
  label: {
    color: theme.palette.primary.contrastText,
  },
  selected: {},
}));

function CurrenySelector() {
  const { state, dispatch } = useContext(Context);
  const { currency } = state;
  const [selectedCurrency, setSelectedCurrency] = useState(currency.name);

  const handleChange = (e, newCurrency) => {
    if (newCurrency !== null) {
      setSelectedCurrency(newCurrency);
      dispatch({
        type: UPDATE_CURRENCY,
        payload: CURRENCY[newCurrency],
      });
    }
  };

  const classes = useStyles();

  return (
    <ToggleButtonGroup
      size="small" exclusive
      aria-label="select currency"
      name="currency"
      value={selectedCurrency}
      onChange={handleChange}
    >
      <ToggleButton
        classes={{
          root: classes.root,
          label: classes.label,
          selected: classes.selected,
        }}
        value={CURRENCY.RUB.name}
        aria-label={CURRENCY.RUB.name}
      >
        {CURRENCY.RUB.name}
      </ToggleButton>
      <ToggleButton
        classes={{
          root: classes.root,
          label: classes.label,
          selected: classes.selected,
        }}
        value={CURRENCY.USD.name}
        aria-label={CURRENCY.USD.name}
      >
        {CURRENCY.USD.name}
      </ToggleButton>
      <ToggleButton
        classes={{
          root: classes.root,
          label: classes.label,
          selected: classes.selected,
        }}
        value={CURRENCY.EUR.name}
        aria-label={CURRENCY.EUR.name}
      >
        {CURRENCY.EUR.name}
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default CurrenySelector;