import React, { Component } from 'react';
import Slide from './Slide';



const styles = {
    carouselContainer: "fullW fullH rel",
    onScreen: "left0",
    offScreenRight: "left100vw",
    offScreenLeft: "leftM100vw",
    transition: "transition1l"
};

class Carousel extends Component {
  constructor(props) {
        super(props);
        this.state = {
            image1: {
                id: 0,
                position: styles.onScreen,
                transition: true
            },
            image2: {
                id: 1,
                position: styles.offScreenRight,
                transition: true
            },
            currentId: 0
        };
    }

    resetSlideTransitions = (image1, image2, currentId) => {
        setTimeout(() => {
            image1["transition"] = true;
            image2["transition"] = true;
            this.setSlideState(image1, image2, currentId);
        }, 500);
    };

    resetSlideOffScreen = () => {
        const { image1, image2, currentId } = this.state;
        const { images } = this.props;
        if (image1["position"] === styles.offScreenLeft) {
            image1["transition"] = false;
            image1["position"] = styles.offScreenRight;
            image1["id"] = image2.id + 1 === images.length ? 0 : image2.id + 1;
        } else {
            image2["transition"] = false;
            image2["position"] = styles.offScreenRight;
            image2["id"] = image1.id + 1 === images.length ? 0 : image1.id + 1;
        }
        this.setSlideState(image1, image2, currentId);
        this.resetSlideTransitions(image1, image2, currentId);
    };

    setSlideState = (image1, image2, currentId) => {
        this.setState({
            image1: image1,
            image2: image2,
            currentId: currentId
        });
    };

    transitionSlides = () => {
        const { image1, image2 } = this.state;
        let currentId;
        if (image1["position"] === styles.onScreen) {
            image1["position"] = styles.offScreenLeft;
            image2["position"] = styles.onScreen;
            currentId = image2.id;
        } else {
            image1["position"] = styles.onScreen;
            image2["position"] = styles.offScreenLeft;
            currentId = image1.id;
        }
        this.setSlideState(image1, image2, currentId);
        setTimeout(() => {
            this.resetSlideOffScreen();
        }, 1000);
    };

    startCarousel = () => {
        this.carouselInterval = setInterval(() => {
            this.transitionSlides();
        }, 6000);
    };

    componentDidMount() {
        this.startCarousel();
    }

    componentWillUnmount() {
       clearInterval(this.carouselInterval);
   }

  render() {
    const { image1, image2, currentId } = this.state;
    const { images } = this.props;
    return(
      <div className='carouselContainer'>
       <Slide image={images[image1.id]}
                    position={image1.position}
                    transition={image1.transition ? styles.transition : ""}/>
       <Slide image={images[image2.id]}
                    position={image2.position}
                    transition={image2.transition ? styles.transition : ""}/>
      </div>
    );
  }
}


export default Carousel;
