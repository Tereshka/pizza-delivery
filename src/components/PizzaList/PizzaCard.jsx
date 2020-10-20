import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function PizzaCard(props) {
  const {name, description, image, ingredients} = props.pizza;
  return (
    <Card>
      <CardHeader
        title={name}
        subheader={description}
      />
      <CardMedia
        // className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {ingredients}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PizzaCard;