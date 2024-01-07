import React from 'react'

export default function Newsitem({ title, description, imageurl, newsurl, author, date, source }) {
    return (
        <div className='container my-4'>
            <div className="card" >
                <img src={!imageurl ? "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
                        {source}
                    </span>
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">by {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsurl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}
