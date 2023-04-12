import React from "react";

import * as API from "../services/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { SearchBar } from "./Searchbar/Searchbar";

export class App extends React.Component {
  state = {
    searchText: '',
    images: '',
    status: 'idle', //pending, resolved, rejected
  }

  onSearch = async (text) => { 
    try {
      this.setState({ searchText: text, status: 'pending' });
      const image = await API.getImage(text);
      this.setState({ images: image.hits });
      this.setState({ status: 'resolved' })
      console.log(this.state.images)
    } catch (error) {
      console.log(error);
    }
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
        {this.state.images &&
          <ImageGallery>
            <ImageGalleryItem images={this.state.images} />
          </ImageGallery>}
      </div>
    )
  };
};
