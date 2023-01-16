import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://w0.peakpx.com/wallpaper/160/528/HD-wallpaper-lord-sri-krishna-krishna-mythology-deity-fun-childhood.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quibusdam
            voluptatibus quos quas quidem nesciunt. Quisquam, quae. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quibusdam
            voluptatibus quos quas quidem nesciunt. Quisquam, quae.
        </p>
    </div>
  );
}
