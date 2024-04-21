import Carousel from 'react-bootstrap/Carousel';
import { TITLE , HOVERCOLOR} from "../../../helper/palette";
import img1 from '../../../../public/images/slide/slide-1.jpg';
import img2 from '../../../../public/images/slide/slide-2.jpg';
import img3 from '../../../../public/images/slide/slide-3.jpg';
import Btn from '../../../helper/BTN/Btn';
function SliderCarousel() {

    return (
        <Carousel fade className='col-12 '>
            <Carousel.Item interval={1500}>
                <img
                    className="col-12 "
                    src={img1}
                    alt="Image One"
                />
                <Carousel.Caption>
                    <h3> <span style={{ color: TITLE }}>second slide</span></h3>
                    <p> <span style={{ color: TITLE }}>Text for Image</span></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                    className="col-12 "
                    src={img2}
                    alt="Image Two"
                />
                <Carousel.Caption>
                    <h3> <span style={{ color: TITLE }}>second slide</span></h3>
                    <p> <span style={{ color: TITLE }}>Text for Image</span></p>
                    <Btn buttonText="منو"/>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
                <img
                    className="col-12 "
                    src={img3}
                    alt="Image 3"
                />
                <Carousel.Caption>
                    <h3> <span style={{ color: TITLE }}>second slide</span></h3>
                    <p> <span style={{ color: TITLE }}>Text for Image</span></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SliderCarousel;