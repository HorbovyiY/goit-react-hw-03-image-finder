import React from "react";

// import * as API from "../services/api";
// import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { SearchBar } from "./Searchbar/Searchbar";
// import { Button } from "./Button/Button";

export class App extends React.Component {
  state = {
    searchText: '',
    images: {},
    page: 1,
    status: 'idle', //pending, resolved, rejected
  }

  onSubmit = (text) => { 
    this.setState({searchText: text})
  }

  render() { 
    return(
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <SearchBar onSubmit={ this.onSubmit} />
      </div>
    )
  };
};
