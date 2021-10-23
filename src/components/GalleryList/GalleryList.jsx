import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import './GalleryList.css'

function GalleryList({ gallery, addLike }) {
    return (
        <>
            <div className="listDiv">
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