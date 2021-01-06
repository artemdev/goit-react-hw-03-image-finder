import { Component } from 'react'
import GalleryItem from './galleryItem'
import shortid from 'shortid'


class ImageGallery extends Component {

    render() {
        const { images } = this.props
        return (
            <ul className="ImageGallery">
                {
                    images.map(image =>
                        <li key={shortid.generate()} className="ImageGalleryItem">
                            <GalleryItem image={image} />
                        </li>
                    )
                }

            </ul>
        )
    }


}

export default ImageGallery