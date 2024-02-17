import React from 'react';

const CardView = ({ post, onRemove }) => {
  const { id, title, body } = post;

  const handleRemoveClick = () => {
    onRemove(id);
  };

  return (
    <div className="card-2">
      <div className="card">
        <button className="deleteButton" onClick={handleRemoveClick}>X</button>
        <div className="cardAvtar"></div>
        <div className="cardText">
          <h1 className="cardTitle">{title}</h1>
          <p className="cardBody">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default CardView;
