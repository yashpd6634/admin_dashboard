import React, { useContext, useEffect, useMemo, useState } from "react";
import classes from "./Home.module.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

const Home = () => {
  const {state} = useContext(AuthContext);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState<any>([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token: "Bearer " + state.user?.accessToken,
          },
        });

        const statsList = res.data.sort((a: any, b: any) => {
          return a._id - b._id;
        });
        statsList.map((item: { _id: number; total: any }) =>
          setUserStats((prev: any) => [
            ...prev,
            { month: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  console.log(userStats);

  return (
    <div className={classes.home}>
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className={classes.homeWidgets}>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
