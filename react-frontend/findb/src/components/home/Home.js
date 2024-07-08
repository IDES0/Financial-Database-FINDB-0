import './Home.css';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ModelCarousel from './ModelCarousel.js';

function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
            </header>
            <Container className="pt-5">
                <ModelCarousel>
                </ModelCarousel>
            </Container>
        </div>
    );
}

export default Home;