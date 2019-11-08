import React, { Component } from 'react';
import Carousel from './Carousel';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';


var styles = {
  container: "screenW screenH dGray col",
  carouselContainer: "flex8 white",
};

var images = [image1, image2, image3, image4, image5];


class App extends Component {
  render() {
    return (
      <div className={styles.container}>
       <div className={styles.carouselContainer}>
                      <Carousel images={images}/>
       </div>
      </div>
    );
  }
}


export default App;
