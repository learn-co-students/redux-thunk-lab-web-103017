import React from 'react'

const CatList = (props) => {
  // console.log(props)
  const catImages = props.catPics.map(cat => {
    return <img src={cat.url} alt="cat" height="100" width="100"/>
  })

  return (
    <div>
      {catImages}
    </div>
  )
}

export default CatList;
