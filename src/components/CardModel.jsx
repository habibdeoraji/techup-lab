import React from 'react';



const CardModel = ({ imageUrl, albumTitle }) => {
    // const [imageUrl, albumTitle] = imageDetails
    console.log(imageUrl, albumTitle);
    return (
        <React.Fragment>
            {imageUrl && <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ width: "40vw", height: "40%" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{albumTitle}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src={imageUrl} alt="imag" style={{ width: "100%", height: "100%" }} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>}
        </React.Fragment>);
}

export default CardModel;


