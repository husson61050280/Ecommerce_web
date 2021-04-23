import React from 'react';
import {Grid,CircularProgress} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart , setProductId}) => {
  const classes = useStyles();

  if (!products.length) {
    return(
      <div className={classes.spinner}>
      <CircularProgress />
      </div>
    )
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} setProductId={setProductId} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

