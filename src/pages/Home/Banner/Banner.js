import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    height="580"
                    className="d-block w-100"
                    src="https://image.freepik.com/free-photo/tourist-from-mountain-top-sun-rays-man-wear-big-backpack-against-sun-light_1150-9129.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Stay with Healtho Care BD</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    height="580"
                    className="d-block w-100"
                    src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/coming-soon-background-img.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Stay with Healtho Care BD</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height="580"
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG91cmlzbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Stay with Healtho Care BD</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;