export const ImageGalleryItem = ({images }) => { 
    return (
        <div>
            {images.map(({ id, webformatURL, tags }) =>
                <li class="gallery-item" key={ id}>
                    <img src={webformatURL} alt={tags} />
                </li>
            )}
        </div>
    )
}   