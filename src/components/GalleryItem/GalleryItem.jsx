function GalleryItem({newPicture, putGallery }) {
    return (
        <>
            <div>
                <img src={newPicture.path} />
                <button onClick={putGallery}>love it!</button>
            </div>
        </>
    )
}

export default GalleryItem;