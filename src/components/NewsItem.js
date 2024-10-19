import React, { Component } from "react";

export class NewsItem extends Component {
    

  render() {
    let { title, description, imageUrl, url } = this.props;
    return (
      <div className="my-3">
        <div class="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://asset.brandfetch.io/idihXRsSy4/id7iN1GhPN.png?updated=1690060830956":imageUrl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title"> {title}</h5>
            <p class="card-text">{description}...</p>
            <a href={url} class="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
