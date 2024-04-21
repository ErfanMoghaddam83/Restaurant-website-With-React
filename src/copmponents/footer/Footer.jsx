import { Container, Row, Col } from 'react-bootstrap';
import "./footer.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
const Footer = () => {
    return (
        <footer className="footer" >
            <Container >
                <h3>Delicious</h3>
                <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                <div className="social-links">
                    <a href="#" className="bi bi-twitter"></a>
                    <a href="#" className="bi bi-facebook"></a>
                    <a href="#" className="bi bi-instagram"></a>
                    <a href="#" className="bi bi-skype"></a>
                    <a href="#" className="bi bi-linkedin"></a>
                </div>
                <div className="copyright">
                    &copy; Copyright <strong><span>Delicious</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="">Erfan</a>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
