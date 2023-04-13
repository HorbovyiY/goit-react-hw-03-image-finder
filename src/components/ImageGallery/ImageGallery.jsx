import React from "react";

import * as API from "../../services/api";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Button } from "components/Button/Button";

export class ImageGallery extends React.Component { 
    state = {
        images: [],
        page: 1,
        status: 'idle', //pending, resolved, rejected
    }

    componentDidUpdate(prevProps, prevState) { 
        if (prevProps.searchText !== this.props.searchText) { 
            this.setState({ status: 'pending', page: 1 });
            
            API.getImage(this.props.searchText)
                .then((response) => response.json())
                .then((data) => this.setState({ images: data.hits, status: 'resolved' }))
                .catch((error) => {
                    console.log(error);
                    this.setState({ status: 'rejected' })
                });
        }

        if (prevState.page !== this.state.page) { 
            this.setState({ status: 'pending' });
            
            API.getImage(this.props.searchText, this.state.page)
                .then((response) => response.json())
                .then((data) => this.setState({ images: [...this.state.images, ...data.hits], status: 'resolved' }))
                .catch((error) => {
                    console.log(error);
                    this.setState({status: 'rejected'})
                })

        }
    }

    addPage = () => { 
        this.setState((prevState) => { return { page: prevState.page + 1 }; })
    }

    render() { 

        

        return (
            <div>
                <ul class="gallery">
                    <ImageGalleryItem images={this.state.images} />
                </ul>
                <Button add={ this.addPage} />
            </div>
        )
    }
}