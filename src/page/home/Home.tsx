import React from 'react'
import classes from "./Home.module.css"
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import {userData} from "../../dummyData"
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

const Home = () => {
  return (
    <div className={classes.home}>
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
        <div className={classes.homeWidgets}>
            <WidgetSm />
            <WidgetLg />
        </div>
    </div>
  )
}

export default Home