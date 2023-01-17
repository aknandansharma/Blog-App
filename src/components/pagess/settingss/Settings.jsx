import React from 'react'
import "./setting.css"
import SideBar from "../../sidebar/SideBar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Accounts</span>
          <span className="settingsDeleteTitle">Delete Accounts</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8EJKOQDIux9qSH1wOVloRcsRsAxXCtsuKQw&usqp=CAU"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id='fileInput' style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder='Aknandan'/>
          <label>Email</label>
          <input type="email" placeholder='aknandan@gmail.com'/>
          <label>Password</label>
          <input type="password"/>
          <button className="settingsSubmit">
            Update Profile
          </button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
