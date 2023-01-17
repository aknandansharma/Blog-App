import React from 'react'
import './singlepost.css'

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://www.teahub.io/photos/full/202-2024233_the-bhagavad-gita-in-pictures-lord-krishna-and.jpg"
          alt=""
          className="singlePostIng"
        />
        <h1 className="singlePostTitle">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
            </div> 
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author:
             <b>Aknandan</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat labore quos, ab cumque hic inventore doloremque sapiente consequuntur, nam harum culpa est omnis quibusdam magnam assumenda perspiciatis pariatur natus vel aut dicta? Blanditiis itaque aut corrupti architecto fuga! Quos expedita doloremque voluptas veniam minima ipsum laborum dolorem? Blanditiis, quis et.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat labore quos, ab cumque hic inventore doloremque sapiente consequuntur, nam harum culpa est omnis quibusdam magnam assumenda perspiciatis pariatur natus vel aut dicta? Blanditiis itaque aut corrupti architecto fuga! Quos expedita doloremque voluptas veniam minima ipsum laborum dolorem? Blanditiis, quis et.
        </p>
      </div>
    </div>
  );
}
