import React from 'react';
import axios from 'axios';


export default class Health extends React.Component
{
    // State will apply to the posts object which is set to loading by default
  state = {
    posts: [],
    isLoading: true,
    errors: null
  };
  // Now we're going to make a request for data using axios
  getPosts() {
    axios.get("http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=62b652ab1e0f4877bcaa7af8069f1df6")
    .then(function(response){
      console.log(response.data.articles)
    });

    axios
      // This is where the data is hosted
      .get("http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=62b652ab1e0f4877bcaa7af8069f1df6")
      // Once we get a response and store data, let's change the loading state
      .then(response => {
        this.setState({
          posts: response.data.articles,
          isLoading: false
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch(error => this.setState({ error, isLoading: false }));
  }
  // Let's our app know we're ready to render the data
  componentDidMount() {
    this.getPosts();
  }
  // Putting that data to use
  render() {
    const { isLoading, posts } = this.state;
    return (
      <React.Fragment>
        <div className="col-lg-12" style={{ padding:"20px" }}>
          <div className="row">
          {!isLoading ? (
            posts.map(post => {
              const { title,description,urlToImage,content,url } = post;
              return (
                <div className="col-lg-3" style={{ padding:"20px",border:"1px solid #ccc" }}>
                  <div className="row">
                  <h2>{title}</h2>
                  <img src={urlToImage} className="img-responsive" style={{ width:"100%" }}></img>
                  <p className="text-justify">{description}</p>
                  <p className="text-justify">{content} <a href={url}>Read more</a></p>
                  <hr />
                  </div>
                  
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}