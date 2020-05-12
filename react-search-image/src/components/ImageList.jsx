import React from "react";

const ImageList = (props) => {
    console.log(props.images)
    const data = props.images;
    const img = data.map((image) => {
        return (
            <figure className="col-md-4">
                <img src={image.urls.small} alt="no_img" className="img-fluid" />
            </figure>
        )
    })

    return (
        <div className="row">
            {img}
        </div>
    )
}

export default ImageList;