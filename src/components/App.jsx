import React from "react";

import { ImageGallery } from "./ImageGallery/ImageGallery";
import { SearchBar } from "./Searchbar/Searchbar";

export class App extends React.Component {
  state = {
    searchText: '',
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
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery searchText={this.state.searchText}/>
      </div>
    )
  };
};
