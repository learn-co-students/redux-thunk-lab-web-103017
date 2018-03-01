import React from 'react'

class CatList extends React.Component {

  render() {
    let catPics = this.props.catPics.map(p => {
      return (
        <div className="col-lg-12" key={p.id}>
          <div className="col-lg-6 col-lg-offset-3 well">
            <img src={p.url} alt="" className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}}/>
          </div>
        </div>
      )
    })
    console.log('CatList', this.props);
    return (
      <div>
        {catPics}
      </div>
    )
  }
}

export default CatList;
