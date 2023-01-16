import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">created by: Aknandan Sharma</span>
        <span className="headerTitleLr">MERN STACK BLOG - APP</span>
      </div>
      <img
        className="headerImg"
        src="https://www.daac.in/images/course/78838d57d1a7987f1183db17cb6c27f6793802489-mern.jpg"
        alt="header-Img"
      />
    </div>
  );
}
