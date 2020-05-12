import React from 'react';
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class App extends React.Component {
  state = { images: [] }

  /* onSearchSubmit = async (term) => {
    console.log(term)
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${term}`, {
      method: 'GET'
    });
    const data = await response.json();
    this.setState({ images: data });
  }; */
  onSearchSubmit = (term) => {
    console.log(term)
    fetch(`https://api.unsplash.com/search/photos?client_id=AZMe9PQIoPJ2SbPHH-eYCGlQXBXQxg9io4K6GH_d9_k&page=1&query=${term}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({ images: data.results });
      })

    console.log(this.state.images);
  }

  render() {
    return (
      <div className="container mt-3">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <p>Found: {this.state.images.length} images</p>
        <div className="row">
          <div className="col-md-12">
            <div className="mdb-lightbox">
              <ImageList images={this.state.images} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
