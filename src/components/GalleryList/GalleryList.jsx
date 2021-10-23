import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList({ gallery, addLike }) {
    return (
        <>
            <div>
                {
                    gallery.map(newPicture => (
                        <GalleryItem
                            newPicture={newPicture}
                            key={newPicture.id}
                            addLike={addLike}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GalleryList;