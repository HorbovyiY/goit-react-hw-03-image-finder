import React from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

import { SearchBar } from "./Searchbar/Searchbar";

export class App extends React.Component {
  state = {
    searchText: '',
  }

  onSearch = (text) => { 
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
        <SearchBar onSubmit={this.onSearch} />
        <ImageGallery>
          <ImageGalleryItem/>
        </ImageGallery>
      </div>
    )
  };
};
