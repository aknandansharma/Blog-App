import React from 'react'
import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <br />
        <img
          className='sidebarImg'
          src="https://www.hinduwallpaper.com/uploads/26062021015330uh2v.png"
          alt="side-bar-img"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod placeat
          incidunt est tenetur quibusdam ea repellat.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">MongoDB</li>
          <li className="sidebarListItem">Express.JS</li>
          <li className="sidebarListItem">React.JS</li>
          <li className="sidebarListItem">Node.JS</li>
          <li className="sidebarListItem">JavaScript.JS</li>
          <li className="sidebarListItem">Java(backend)</li>
        </ul>
      </div>
      <div className="sidebarSocial">
        <span className="sidebarTitle">FOLLOW US</span>
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
      </div>
    </div>
  );
}
