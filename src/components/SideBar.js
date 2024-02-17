import React, { useState } from 'react';
import FeedbackForm from './FeedbackForm'; // Import your FeedbackForm component
import '../style/style.css';
import cardIcon from '../assets/card.png'
import listIcon from '../assets/list.png'
function SideBar({ showFeedbackForm, toggleFeedbackForm, sidebarWidth }) {

  return (
    <div className={`sideBar sidebar `} style={{ width: sidebarWidth }}>
      <div className='sidebarContent' style={{ paddingTop: '76px' }}>
        <div className='user'>
          <div className='avtar'></div>
          <div className='text'>
            <h2 className='userTitle'>Hi Reader,</h2>
            <h3 className='userSubtitle'>Here’s your News!</h3>
          </div>
        </div>
        <div className='viewToggle' style={showFeedbackForm ? {display: 'none'} : {display: 'flex'}} >
          <h2 className='toggleTittle'>View Toggle</h2>
          <div className='toggleIcons'>
            <div className='cardBtn'>
              <img src={cardIcon}/>
            </div>
            <div className='listBtn'>
            <img src={listIcon}/>
            </div>
            
          </div>
        </div>
        <div className='feedBack'>
          <h2 className='feedBackTittle'>Have a Feedback?</h2>
          <div onClick={toggleFeedbackForm} style={showFeedbackForm ? {backgroundColor: '#FFAFAF'} : {backgroundColor: '#A3FFD3'}} className={`feedBackBtn`}>
    We are Listening
</div>

        </div>
      </div>
      {showFeedbackForm && (
    <FeedbackForm/>
    )}
  
    </div>
  );
}

export default SideBar;
