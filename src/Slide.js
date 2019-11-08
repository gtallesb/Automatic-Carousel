import React, { memo } from "react";

const styles = {
    container: "abs fullW fullH",
    slideImage: "fullH fullW imgCover"
};

const Slide = ({ position, transition, image }) => {
    return (
        <div className={styles.container + " " + position + " " + transition}>
            <img src={image} className={styles.slideImage} alt="slide" />
        </div>
    );
};


export default Slide;
