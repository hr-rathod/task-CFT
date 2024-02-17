import React from 'react';

const List = ({ post, onRemove }) => {
  return (
    <div className='listContainer'>
      <div className='list'>
        <div className='listAvtar'></div>
        <div className='listText'>
          <h1 className='listTitle'>{post.title}</h1>
          <p className='listBody'>{post.body}</p>
        </div>
      </div>
      <div className='deleteBtn' onClick={() => onRemove(post.id)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
  <g filter="url(#filter0_dd_1_201)">
    <circle cx="44.5" cy="36.5" r="24.5" fill="white"/>
  </g>
  <path d="M36.7756 25.4569L45 33.681L53.1906 25.4907C53.3341 25.338 53.507 25.2157 53.6989 25.1314C53.8909 25.0471 54.0978 25.0024 54.3075 25C54.7563 25 55.1867 25.1783 55.5041 25.4956C55.8214 25.813 55.9997 26.2434 55.9997 26.6922C56.0037 26.8997 55.9652 27.1058 55.8866 27.2978C55.808 27.4899 55.691 27.6638 55.5428 27.8091L47.2676 35.9993L55.5428 44.2742C55.8217 44.5471 55.9853 44.9166 55.9997 45.3065C55.9997 45.7553 55.8214 46.1857 55.5041 46.503C55.1867 46.8204 54.7563 46.9987 54.3075 46.9987C54.0918 47.0076 53.8766 46.9716 53.6756 46.893C53.4746 46.8143 53.2921 46.6947 53.1398 46.5418L45 38.3177L36.7925 46.5248C36.6495 46.6725 36.4787 46.7904 36.2899 46.8718C36.1011 46.9531 35.8981 46.9962 35.6925 46.9987C35.2437 46.9987 34.8133 46.8204 34.4959 46.503C34.1786 46.1857 34.0003 45.7553 34.0003 45.3065C33.9963 45.099 34.0348 44.8929 34.1134 44.7008C34.192 44.5088 34.309 44.3348 34.4572 44.1896L42.7324 35.9993L34.4572 27.7244C34.1783 27.4516 34.0147 27.0821 34.0003 26.6922C34.0003 26.2434 34.1786 25.813 34.4959 25.4956C34.8133 25.1783 35.2437 25 35.6925 25C36.0987 25.0051 36.4879 25.1692 36.7756 25.4569Z" fill="#FF9090"/>
  <defs>
    <filter id="filter0_dd_1_201" x="0" y="0" width="89" height="89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_201"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="12"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.08 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_201"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="6" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1_201"/>
      <feOffset dy="6"/>
      <feGaussianBlur stdDeviation="6"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.12 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_1_201" result="effect2_dropShadow_1_201"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_201" result="shape"/>
    </filter>
  </defs>
</svg>
      </div>
    </div>




  );
};

export default List;
