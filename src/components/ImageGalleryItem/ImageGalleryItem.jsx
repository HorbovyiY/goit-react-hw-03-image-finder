import { GalleryItem } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ images }) => { 
    return (
        <div>
            { images.length!==0 && images.map(
                    (image) => { 
                        return (
                            <GalleryItem key={image.id}>
                                <img src={image.webformatURL} alt={image.tags} />
                            </GalleryItem>
                        )
                    }
                )}
        </div>
    )
}