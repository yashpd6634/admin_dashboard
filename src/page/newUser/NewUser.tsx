import React from 'react'
import classes from "./NewUser.module.css"

const NewUser = () => {
  return (
    <div className={classes.newUser}>
      <h1 className={classes.newUserTitle}>New User</h1>
      <form className={classes.newUserForm}>
        <div className={classes.newUserItem}>
          <label>Username</label>
          <input type="text" placeholder="John"/>
        </div>
        <div className={classes.newUserItem}>
          <label>Full Name</label>
          <input type="text" placeholder="John Smith"/>
        </div>
        <div className={classes.newUserItem}>
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com"/>
        </div>
        <div className={classes.newUserItem}>
          <label>Password</label>
          <input type="password" placeholder="password"/>
        </div>
        <div className={classes.newUserItem}>
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 67"/>
        </div>
        <div className={classes.newUserItem}>
          <label>Address</label>
          <input type="text" placeholder="New York | USA"/>
        </div>
        <div className={classes.newUserItem}>
          <label>Gender</label>
          <div className={classes.newUserGender}>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className={classes.newUserItem}>
          <label htmlFor="">Active</label>
          <select name="active" id="active" className={classes.newUserSelect}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
          </select>
          <button className={classes.newUserButton}>Create</button>
        </div>
      </form>
    </div>
  )
}

export default NewUser