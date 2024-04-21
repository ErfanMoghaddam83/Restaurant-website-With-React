import Card from 'react-bootstrap/Card';
import AboutImg from '../../../../public/images/about.jpg';
import Btn from '../../../helper/BTN/Btn';
import React, { forwardRef, useImperativeHandle } from 'react';
/* ref={ref} */
import './css/About.css';

const About = forwardRef((props, ref) => {
    const { aboutRef } = props;

    useImperativeHandle(aboutRef, () => ({
        scrollIntoView: () => {
            window.scrollTo({
                behavior: 'smooth',
                top: 0,
            });
        },
    }));
    return (
        <>
            <Card style={{ width: '100%',backgroundColor:'#fffaf3' }} ref={ref}>
                <div className="d-flex flex-column flex-md-row">
                    <div className="col-md-5 mb-3 mb-md-0">
                        <Card.Img variant="top" src={AboutImg} />
                    </div>
                    <div className="col-md-7">
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Btn buttonText="درباره " />
                        </Card.Body>
                    </div>
                </div>
            </Card>
            <div className='m-5 d-flex flex-column align-items-center justify-content-center'>
                <Card.Title>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></Card.Title>
                <Card.Text>
                    <p className="align-self-center">
                        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.
                    </p>
                </Card.Text>
            </div>

                <div className='why-us m-5 ' >
                    <div className='box col-lg-3'>
                        <Card.Body>
                            <Card.Title >Card title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt labore odit. Impedit quisquam possimus tenetur beatae reiciendis atque neque inventore consectetur vel quibusdam minima officia in, praesentium, ratione tempore, doloremque velit necessitatibus distinctio culpa. Quam, quas mollitia quidem animi quisquam obcaecati. Quaerat, repellendus maiores quam quas corporis asperiores nulla.
                            </Card.Text>
                        </Card.Body>
                    </div>
                    <div className='box col-lg-3'>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt labore odit. Impedit quisquam possimus tenetur beatae reiciendis atque neque inventore consectetur vel quibusdam minima officia in, praesentium, ratione tempore, doloremque velit necessitatibus distinctio culpa. Quam, quas mollitia quidem animi quisquam obcaecati. Quaerat, repellendus maiores quam quas corporis asperiores nulla.
                            </Card.Text>
                        </Card.Body>
                    </div>
                    <div className='box col-lg-3'>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt labore odit. Impedit quisquam possimus tenetur beatae reiciendis atque neque inventore consectetur vel quibusdam minima officia in, praesentium, ratione tempore, doloremque velit necessitatibus distinctio culpa. Quam, quas mollitia quidem animi quisquam obcaecati. Quaerat, repellendus maiores quam quas corporis asperiores nulla.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>

        </>
    );
});

export default About;
