import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,url,newsurl,author,date,source}=this.props;
    return (
      <div>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zindex:'1'}}>{source}
                  </span>
            <img src={!url?"https://www.mobileworldlive.com/wp-content/uploads/2022/10/metavertu_640.png":url} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <p className="card-text">{description}...</p>
            <a href={newsurl} target="_blank" className="btn btn-primary">Read More</a>
            </div>
        </div>
     </div>
    )
  }
}

export default NewsItem