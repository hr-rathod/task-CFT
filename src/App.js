// App.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar.js';
import { setPosts, removePost } from './reducers/postsSlice.js';
import { getPosts } from './api/api.js';
import CardsList from './components/CardList.js';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { data: allPosts, loading } = useSelector((state) => state.posts);
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getPosts();
        dispatch(setPosts(postsData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleRemove = (postId) => {
    dispatch(removePost(postId));
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [isHomeBlurred, setIsHomeBlurred] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(400);

  const toggleFeedbackForm = () => {
    setShowFeedbackForm(!showFeedbackForm);
    setSidebarWidth(showFeedbackForm ? 400 : window.innerWidth * 0.7);
    setIsHomeBlurred(!isHomeBlurred);
  };
  return (
   
    <div className="app">
    <SideBar
      showFeedbackForm={showFeedbackForm}
      toggleFeedbackForm={toggleFeedbackForm}
      sidebarWidth={sidebarWidth}
    />
   <CardsList posts={allPosts} isBlurred={isHomeBlurred}  onRemove={handleRemove} /> 
   
  </div>
  );
};

export default App;
