import React from 'react';
import { posts } from '../data';

function Post() {
  const post = posts[2];

  return <div className='post'>
    <img src={post.img} alt="" className="postImg" />
    <hi className="postTitle">{post.title}</hi>
    <p className="postDesc">{post.desc}</p>
    <p className="postLongDesc">{post.longDesc}</p>
  </div>;
}

export default Post;
