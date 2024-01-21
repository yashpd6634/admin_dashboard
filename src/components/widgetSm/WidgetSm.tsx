import { Visibility } from "@mui/icons-material"
import classes from "./WidgetSm.module.css"

const WidgetSm = () => {
  return (
    <div className={classes.widgetSm}>
        <span className={classes.widgetSmTitle}>New Join Members</span>
        <ul className={classes.widgetSmList}>
          <li className={classes.widgetSmListItem}>
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className={classes.widgetSmImg} />
            <div className={classes.widgetSmUser}>
              <span className={classes.wdgetSmUsername}>Anna Kellar</span>
              <span className={classes.wdgetSmUserTitle}>Software Engineer</span>
            </div>
            <button className={classes.widgetSmButton}>
              <Visibility className={classes.widgetSmIcon}/>
              Display
            </button>
          </li>
          <li className={classes.widgetSmListItem}>
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className={classes.widgetSmImg} />
            <div className={classes.widgetSmUser}>
              <span className={classes.wdgetSmUsername}>Anna Kellar</span>
              <span className={classes.wdgetSmUserTitle}>Software Engineer</span>
            </div>
            <button className={classes.widgetSmButton}>
              <Visibility className={classes.widgetSmIcon}/>
              Display
            </button>
          </li>
          <li className={classes.widgetSmListItem}>
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className={classes.widgetSmImg} />
            <div className={classes.widgetSmUser}>
              <span className={classes.wdgetSmUsername}>Anna Kellar</span>
              <span className={classes.wdgetSmUserTitle}>Software Engineer</span>
            </div>
            <button className={classes.widgetSmButton}>
              <Visibility className={classes.widgetSmIcon}/>
              Display
            </button>
          </li>
          <li className={classes.widgetSmListItem}>
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className={classes.widgetSmImg} />
            <div className={classes.widgetSmUser}>
              <span className={classes.wdgetSmUsername}>Anna Kellar</span>
              <span className={classes.wdgetSmUserTitle}>Software Engineer</span>
            </div>
            <button className={classes.widgetSmButton}>
              <Visibility className={classes.widgetSmIcon}/>
              Display
            </button>
          </li>
          <li className={classes.widgetSmListItem}>
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className={classes.widgetSmImg} />
            <div className={classes.widgetSmUser}>
              <span className={classes.wdgetSmUsername}>Anna Kellar</span>
              <span className={classes.wdgetSmUserTitle}>Software Engineer</span>
            </div>
            <button className={classes.widgetSmButton}>
              <Visibility className={classes.widgetSmIcon}/>
              Display
            </button>
          </li>
        </ul>
    </div>
  )
}

export default WidgetSm