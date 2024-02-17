import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../reducers/postsSlice';
import "../style/style.css"; // Import your CSS file
import CardView from './CardView';

const CardsList = ({ posts, onRemove, isBlurred }) => {
  const postsPerPage = 6;
  const currentPage = useSelector((state) => state.posts.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts) { // Check if posts is defined
      const totalPages = Math.ceil(posts.length / postsPerPage);
      if (currentPage < 1 || currentPage > totalPages) {
        dispatch(setCurrentPage(1));
      }
    }
  }, [currentPage, dispatch, posts, postsPerPage]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleRemove = (postId) => {
    onRemove(postId);
  };

  if (!posts) { // Check if posts is undefined
    return <p>Loading...</p>;
  }

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = Math.min(startIndex + postsPerPage, posts.length);

  // Slice the posts array for the current page
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div className={`home cardsList ${isBlurred ? 'blurred' : ''}`}>
      <div className='helpingDiv'></div>
      <div className="cardGrid">
        {currentPosts.length > 0 && (
          <div className="cardContainer">
            {currentPosts.map((post) => (
              <List key={post.id} post={post} onRemove={() => handleRemove(post.id)} />
              <CardView key={post.id} post={post} onRemove={() => handleRemove(post.id)} />
            ))}
          </div>
        )}
        <div className='pagination'>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? 'active' : ''}
              disabled={totalPages <= 1}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsList;