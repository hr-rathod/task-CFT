import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';
import { setCurrentPage } from '../reducers/postsSlice';
import "../style/style.css"; // Import your CSS file

const CardsList = ({ posts, onRemove, isBlurred }) => {
  const postsPerPage = 6;
  const currentPage = useSelector((state) => state.posts.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    const totalPages = Math.ceil(posts.length / postsPerPage);
    if (currentPage < 1 || currentPage > totalPages) {
      dispatch(setCurrentPage(1));
    }
  }, [currentPage, dispatch, posts, postsPerPage]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleRemove = (postId) => {
    onRemove(postId);
  };

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div className={`home cardsList ${isBlurred ? 'blurred' : ''}`}>
      <div className='helpingDiv'></div>
      <div>
        {currentPosts.length > 0 ? (
          <>
            {currentPosts.map((post) => (
              <List key={post.id} post={post} onRemove={() => handleRemove(post.id)} />
            ))}
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
          </>
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default CardsList;
