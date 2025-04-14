import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div>
        <div className="my-3">
        <div className="card" style={{width: "24rem"}}>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : "93%", zIndex : 1}}>
              {source}
            </span>
            <img src={imageUrl} alt="/"/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text my-2"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_main" className="btn btn-primary">Read More</a>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
