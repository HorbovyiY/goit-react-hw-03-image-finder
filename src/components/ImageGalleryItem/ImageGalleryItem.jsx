export const ImageGalleryItem = ({ images }) => { 
    return (
        <div>
            { images.length!==0 && images.map(
                    (image) => { 
                        return (
                            <li class="gallery-item" key={image.id}>
                                <img src={image.webformatURL} alt={image.tags} />
                            </li>
                        )
                    }
                )}
        </div>
    )
}