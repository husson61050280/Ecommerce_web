import React from 'react'
import { Container, Typography , Grid} from '@material-ui/core';
import {LocalGroceryStore} from '@material-ui/icons'
import useStyle from './styles'

const Banner = () => {
    const classes = useStyle();
    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <Container maxWidth="lg" align="center" className={classes.root}>
                    <Typography variant="h3" className={classes.title} color="primary" gutterBottom>Welcome to E-Commerce Shop</Typography>
                    <Typography variant="h6"color="textSecondary" gutterBottom>Let's find anything you want!<LocalGroceryStore className={classes.icon}/></Typography>
            </Container>
        </main>
    )
}

export default Banner
