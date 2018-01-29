import React from 'react';

const CatList = ({ catPics }) => {
  console.log(catPics)
  // debugger
  const catImages = catPics.map((pic, index) => <div><img key={index} src={pic.url}></img></div>)
  // console.log(catImages)s
  return (
    <div>
      {catImages.length? catImages : '...loading'}
    </div>
  );
};

export default CatList;
