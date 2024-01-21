import React from 'react'
import classes from "./Product.module.css"
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className={classes.product}>
        <div className={classes.productTitleContainer}>
            <h1 className={classes.productTitle}>Product</h1>
            <Link to="/newProduct">
                <button className={classes.productAddButton}>Create</button>
            </Link>
        </div>
    </div>
  )
}

export default Product