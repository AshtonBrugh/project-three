import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { QUERY_ADD_PRODUCT } from '../../utils/mutations';
import { QUERY_ALL_PRODUCTS, QUERY_ME } from '../../utils/queries';

const Post = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [postImage, setPostImage] = useState('');

  function onImageChange(e) {
      setPostImage([...e.target.files]);
  }
  const [addPost, { error }] = useMutation(QUERY_ADD_PRODUCT, {
    update(cache, { data: { addPost } }) {
      try {
        // update thought array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { posts } = cache.readQuery({ query: QUERY_ALL_PRODUCTS});
        cache.writeQuery({
          query: QUERY_ALL_PRODUCTS,
          data: { thoughts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 500) {
      setPostTitle(event.target.value)
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addPost({
        variables: { postTitle, postDescription, postImage },
      });

      // clear form value
      setPostTitle('');
      setPostDescription(' ');
      setPostImage('');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
    <form className="form">
      <label className="form-label">Enter your item name:
        <input type="text" value={postTitle} onChange={handleChange} onSubmit={handleFormSubmit}/>
      </label>
      <textarea>Add your item's description here!
      <span className="" value={postDescription} onSubmit={handleFormSubmit}></span>
      </textarea>
     <div className="">
         <input type="file" id="file-input" value={postImage} name="ImageStyle" onChange={onImageChange} onSubmit={handleFormSubmit}/>
     </div>
      <button type="submit">Submit</button>
      
    </form>

    </>
    );

    
}


export default Post;
