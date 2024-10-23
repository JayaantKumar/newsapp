import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div class="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
            <img
              src={
                !imageUrl
                  ? "https://asset.brandfetch.io/idihXRsSy4/id7iN1GhPN.png?updated=1690060830956"
                  : imageUrl
              }
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title"> {title} </h5>
              <p class="card-text">{description}...</p>
              <p class="card-text">
                <small class="text-muted">
                  By {!author ? "Unknown" : author} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a href={url} class="btn btn-sm btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
