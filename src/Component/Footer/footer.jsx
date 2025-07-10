import './footer.css';
import Logo from "../../assets/image/Logo.jpg";
import 'boxicons/css/boxicons.min.css';
import { useScrollAnimation } from '../../Utils/scrollAnimation';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {

    const navigte = useNavigate();
    // Fixed typos: 'thresold' -> 'threshold' and 'isVisiable' -> 'isVisible'
    const [refOfRow1, isVisible1] = useScrollAnimation({ threshold: 0.1 });
    const [refOfRow2, isVisible2] = useScrollAnimation({ threshold: 0.1 });
    const [refOfRow3, isVisible3] = useScrollAnimation({ threshold: 0.1 });

    const goToAbout = () => {
        navigte('/About');
        window.scrollTo(0,0);
    }
    const goToProject = () => {
        navigte("/Projects");
        window.scrollTo(0,0);
    }
    const goToBrochure = () => {
        navigte("/Brochure");
        window.scrollTo(0,0);
    }
    const goToHome = () => {
        navigte("/");
        window.scrollTo(0,0);
    }
    return (
        <footer className="mainDiv">
            <div className='AboutWebsite'>
                <div ref={refOfRow1} className={`row ${isVisible1 ? 'visible' : 'hidden'}`}>
                    <div className='LogoRepresent'>
                        <img src={Logo} alt='Logo' className='Image' />
                        <p className='logoParagraph'>Sat Shri Steel</p>
                    </div>
                    <div className='LogoRepresent1'>
                        <i className='bx bx-map mapIcon'></i>
                        <a href="https://www.google.com/maps?q=21.3030235,72.9168464"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='link'>
                            <p className='paragraph'>Krishna Farm, Near Bharat Way Bridge, N.H.8, Kosamadi, Surat</p>
                            <small className='smallText'>Click to view on Google Maps</small>
                        </a>
                    </div>
                    <div className='socialLinks'>
                        <a
                            href="https://www.facebook.com/share/1Ama7NjH3b/"
                            className='facebook'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bx bxl-facebook"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/satshree_steel?igsh=NHUydGh2NmZoZGdt"
                            className='instagram'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bx bxl-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className='mobile-columns'>
                    <div ref={refOfRow2} className={`row1 ${isVisible2 ? 'visible' : 'hidden'}`}>
                        <div className='list1'>
                            <h4 className='sectionTitle'>Facility</h4>
                            <a className="footer-link" to = "/Projects" onClick={goToAbout}>Steel Structure</a>
                            <a className="footer-link" onClick={goToProject}>Dom</a>
                            <a className="footer-link" onClick={goToProject}>Industrial Dom</a>
                        </div>
                    </div>
                    <div ref={refOfRow3} className={`row2 ${isVisible3 ? 'visible' : 'hidden'}`}>
                        <div className='list1'>
                            <h4 className='sectionTitle' onClick={goToHome}>Support</h4>
                            <a className="footer-link" onClick={goToAbout}>About Us</a>
                            <a className="footer-link" onClick={goToAbout}>Privacy Policy</a>
                            <a className="footer-link" onClick={goToHome}>Help Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerDiv'>
                All Rights Reserved
            </div>
        </footer>
    );
}