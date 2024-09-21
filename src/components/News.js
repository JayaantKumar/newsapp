import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsApp - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element) => {
          return  <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} url={element.url}/>
          </div>
        })}
        </div>
      </div>
    );
  }
}

export default News;
