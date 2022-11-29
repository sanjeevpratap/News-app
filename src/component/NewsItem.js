import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imgurl, newsurl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '95%',zIndex: '1'}}>
              {source}
             
            </span>
          <img src={!imgurl ? "https://images.livemint.com/img/2022/09/10/600x338/ff_max_1662000070768_1662777834958_1662777834958.jpg" : imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "unknown" : author} on {new Date(date).toGMTString()} </small> </p>
            {/* <p className='card-text'><small className='text-muted'>By {source.id ? source.id : "unknown"} name:{source.name}</small> </p> */}

            <a rel='noreferrer' href={newsurl} target="_blank" className="btn btn-sn btn-dark">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
