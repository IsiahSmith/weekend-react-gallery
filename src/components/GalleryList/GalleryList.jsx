import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList({ gallery, putGallery }) {
    return (
        <>
            <div>
                {
                    gallery.map(newPicture => (
                        <GalleryItem
                            newPicture={newPicture}
                            key={newPicture.id}
                            putGallery={putGallery}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GalleryList;