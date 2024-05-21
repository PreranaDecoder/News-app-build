import React from "react";

const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          {/* style={{width: "18rem"}} */}
          <img
            src={
              !imageUrl
                ? "https://www.livemint.com/lm-img/img/2024/04/28/1600x900/4f51f049f2aae6726273d6469848d5be_1705800043531_1714275290540.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}\</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on {date}
              </small>
            </p>
            <a
              rel="nonreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
  );  
}

export default NewsItem;
