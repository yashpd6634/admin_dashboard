import React from 'react'
import classes from "./FeaturedInfo.module.css"
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

const FeaturedInfo = () => {
  return (
    <div className={classes.featured}>
        <div className={classes.featuredItem}>
            <span className={classes.featuredTitle}>Revenue</span>
            <div className={classes.featuredMoneyContainer}>
                <span className={classes.featuredMoney}>$2,145</span>
                <span className={classes.featuredMoneyRate}>
                    -11.4 <ArrowDownward className={`${classes.featuredIcon} ${classes.negative}`} />
                </span>
            </div>
            <span className={classes.featuredSub}>
                Compared to last month
            </span>
        </div>
        <div className={classes.featuredItem}>
            <span className={classes.featuredTitle}>Sales</span>
            <div className={classes.featuredMoneyContainer}>
                <span className={classes.featuredMoney}>$4,235</span>
                <span className={classes.featuredMoneyRate}>
                    -1.4 <ArrowDownward className={`${classes.featuredIcon} ${classes.negative}`} />
                </span>
            </div>
            <span className={classes.featuredSub}>
                Compared to last month
            </span>
        </div>
        <div className={classes.featuredItem}>
            <span className={classes.featuredTitle}>Cost</span>
            <div className={classes.featuredMoneyContainer}>
                <span className={classes.featuredMoney}>$2,225</span>
                <span className={classes.featuredMoneyRate}>
                    +2.4 <ArrowUpward className={`${classes.featuredIcon}`} />
                </span>
            </div>
            <span className={classes.featuredSub}>
                Compared to last month
            </span>
        </div>
    </div>
  )
}

export default FeaturedInfo