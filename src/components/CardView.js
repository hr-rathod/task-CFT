import React from 'react';

const CardView = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map((post) => (
        <div className="card-2" key={post.id}>
          <div className="card">
            <div className="cardAvtar"></div>
            <div className="cardText">
              <h1 className="cardTitle">{post.title}</h1>
              <p className="cardBody">{post.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardView;
