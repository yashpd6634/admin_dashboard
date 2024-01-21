import React from 'react'
import classes from "./Chart.module.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DataObject {
    month: string;
    [key: string]: number|string;
}

interface InputProps {
    // children?: React.ReactElement;
    title: string;
    data: DataObject[];
    dataKey: string;
    grid: boolean;
}

const Chart: React.FC<InputProps> = (props) => {

  return (
    <div className={classes.chart}>
        <h3 className={classes.chartTitle}>{props.title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={props.data}>
                <XAxis dataKey="month" stroke='#5550bd' />
                <Line type="monotone" dataKey={props.dataKey} />
                <Tooltip />
                {props.grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart