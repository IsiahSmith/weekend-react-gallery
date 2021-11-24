import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem({ newPicture, addLike }) {

    const [showDesc, setShowDesc] = useState(false)

    const toggleDescription = () => {
        setShowDesc(!showDesc)

    }



    return (
        <>
            <div>
                <div className="newPic">
                    <img className={showDesc ? "picClass toggleClass" : "picClass"}
                        src={newPicture.path}
                        alt={newPicture.description}
                        onClick={toggleDescription} />
                    {showDesc && (<div className="showDesc">{newPicture.description}</div>)}
                </div>
                <div>
                    <button onClick={() => addLike(newPicture)}>love it!</button>
                    {newPicture.likes ? <p><span>{newPicture.likes}</span> people love this!</p> : <p>No one likes this :( </p>}
                </div>
            </div>
        </>
    )
}

export default GalleryItem;