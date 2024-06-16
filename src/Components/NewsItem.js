import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <div>
        <div className="card my-3" style={{width: "18rem"}}>
            <img src="https://static.toiimg.com/thumb/msid-111024766,width-1070,height-580,imgsize-36846,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/newsDetails" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
