import React , {useState , useEffect} from 'react'
import { Container, Typography , Button } from '@material-ui/core';
import useStyle from './styles'
import {useHistory,Link} from 'react-router-dom'

const Product_detail = ({products , productId , onAddToCart}) => {
    const history = useHistory();
    const classes = useStyle()
    const product = productId ? products.filter((product=> product.id === productId)) : "";
    console.log(product);

    const handleAddToCart = () => onAddToCart(product[0].id, 1);

    useEffect(()=> {
        if(!productId) history.push('/');
    },[])

    return (
        <>
        <main className={classes.content}>
        <div className={classes.toolbar} />
            {product &&
                <Container maxWidth="lg">
                <Typography className={classes.title} variant="h4" gutterBottom>{product[0].name}</Typography>
                    <img src={product[0].media.source} alt="" className= {classes.image}/>
                <Typography dangerouslySetInnerHTML={{ __html: product[0].description }} variant="body2" color="textSecondary" component="p" />
                <Typography variant="h4" className={classes.title} gutterBottom>PRICE : {product[0].price.formatted}</Typography>
                <Button variant="contained" component={Link} to="/" color="primary">Back</Button>
                <Button variant="contained" color="secondary" onClick={handleAddToCart}>Add to Cart</Button>
                </Container>
            }
        </main>
        </>
    )
}

export default Product_detail
