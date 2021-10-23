import './GalleryItem.css'

function GalleryItem({ newPicture, addLike }) {
    return (
        <>
            <div>
                <img className="picClass" src={newPicture.path} />
                <div>
                    <button onClick={() => addLike(newPicture)}>love it!</button>
                </div>
                <p><span>{newPicture.likes}</span> people love this!</p>
            </div>

        </>
    )
}

export default GalleryItem;