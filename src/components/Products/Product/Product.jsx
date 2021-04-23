import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton , Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart , setProductId }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  const subTitle = (text, length) => {
    return text.substring(0,length)
  }

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="subtitle1">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: subTitle(product.description,70) }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
      <Button variant="contained" component={Link} to="detail" color="primary" onClick={() => setProductId(product.id)}>View</Button>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

