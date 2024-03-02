import { Visibility } from "@mui/icons-material";
import classes from "./WidgetSm.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

interface UserInput {
  username: string;
  email: string;
  password: string;
  profilePic: string;
  isAdmin: boolean;
}

interface UserOutput extends UserInput {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

const WidgetSm = () => {
  const [newUser, setNewUsers] = useState<UserOutput[]>([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmY0NWQ0ODdiZTYzYTEyZTI2MTE4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwOTM1OTM1OSwiZXhwIjoxNzA5NzkxMzU5fQ.V2CpsQgndyzr66jS8sG_5O0nXSakz0-CRCNtSRNdhF4",
          },
        });
        console.log(res);
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getNewUsers();
  }, []);
  return (
    <div className={classes.widgetSm}>
      <span className={classes.widgetSmTitle}>New Join Members</span>
      <ul className={classes.widgetSmList}>
        {newUser.map((user) => (
          <li className={classes.widgetSmListItem}>
            <img
              src={user.profilePic || "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"}
              alt=""
              className={classes.widgetSmImg}
            />
            <div className={classes.widgetSmUser}>
              <span className={classes.wdgetSmUsername}>{user.username}</span>
              {/* <span className={classes.wdgetSmUserTitle}>
                Software Engineer
              </span> */}
            </div>
            <button className={classes.widgetSmButton}>
              <Visibility className={classes.widgetSmIcon} />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
