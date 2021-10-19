import React, { useState } from 'react';
import CardModel from './CardModel';


const ImageCard = ({ albumData }) => {
    const [imageUrl, setImageUrl] = useState()
    const [albumTitle, setAlbumTitle] = useState()

    return (
        <React.Fragment>
            {albumData.map(albumItem => {
                return <div key={albumItem.id} style={{ margin: "20px", cursor: "pointer", border: "1px solid gray", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src={albumItem.thumbnailUrl} alt="" />
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{ width: "50%", margin: "10px 0" }} onClick={() => {
                        console.log(albumItem.url)
                        setImageUrl(albumItem.url)
                        setAlbumTitle(albumItem.title)
                    }}>
                        open
                    </button>
                </div>
            })}
            <CardModel imageUrl={imageUrl} albumTitle={albumTitle} />
        </React.Fragment >
    );
}

export default ImageCard;