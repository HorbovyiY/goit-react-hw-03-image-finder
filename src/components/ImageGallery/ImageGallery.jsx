import React from "react";

import * as API from "../../services/api";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends React.Component { 
    state = {
        images: [],
        status: 'idle', //pending, resolved, rejected
    }

    componentDidUpdate(prevProps) { 
        if (prevProps.searchText !== this.props.searchText) { 
            this.setState({ status: 'pending' });
            
            API.getImage(this.props.searchText)
                .then((response) => response.json())
                .then((data) => this.setState({ images: data.hits, status: 'resolved' }))
                .catch((error) => {
                    console.log(error);
                    this.setState({status: 'rejected'})
                })
                    
        }
    }

    render() { 
        return (
            <ul class="gallery">
                <ImageGalleryItem images={ this.state.images}/>
            </ul>
        )
    }
}