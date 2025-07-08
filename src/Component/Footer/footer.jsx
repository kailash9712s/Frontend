import './footer.css';
import Logo from "../../assets/image/Logo.jpg";
import 'boxicons/css/boxicons.min.css';
import { useScrollAnimation } from '../../Utils/scrollAnimation';

export default function Footer() {

    const [refOfRow1, isVisiable1] = useScrollAnimation({ threshold: 0.1});
    const [refOfRow2, isVisiable2] = useScrollAnimation({ thresold: 0.1});
    const [refOfRow3, isVisiable3] = useScrollAnimation({ thresold: 0.1});


    return (
        <footer className="mainDiv">
            <div className='AboutWebsite'>
                <div ref={refOfRow1} className={`row ${isVisiable1 ? 'visible' : 'hidden'}`}>
                    <div className='LogoRepresent'>
                        <img src={Logo} alt='Logo' className='Image' />
                        <p className='logoParagraph'>Sat Shri Steel</p>
                    </div>
                    <div className='LogoRepresent1'>
                        <i className='bx bx-map mapIcon'></i>
                        <div className='link'>
                            <p className='paragraph'>Krishna Farm, Near Bharat Way Bridge, N.H.8, Kosamadi, Surat</p>
                            <small className='smallText'>Click to view on Google Maps</small>
                        </div>
                    </div>
                    <div className='socialLinks'>
                        <a
                            href="https://www.facebook.com/share/1Ama7NjH3b/"
                            className='facebook'
                        >
                            <i className="bx bxl-facebook"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/satshree_steel?igsh=NHUydGh2NmZoZGdt"
                            className='instagram'
                        >
                            <i className="bx bxl-instagram"></i>
                        </a>
                    </div>
                </div>
                <div ref = {refOfRow2} className={`row1 ${isVisiable2 ? 'visible' : 'hidden'}`}>
                    <div className='list1'>
                        <h4 className='sectionTitle'>Facility</h4>
                        <a className="footer-link">Steel Structure</a>
                        <a className="footer-link">Dom</a>
                        <a className="footer-link">Industrial Dom</a>
                    </div>
                </div>
                <div ref = {refOfRow3} className={`row2 ${isVisiable3 ? 'visible' : 'hidden'}`}>
                    <div className='list1'>
                        <h4 className='sectionTitle'>Support</h4>
                        <a className="footer-link">About Us</a>
                        <a className="footer-link">Privacy Policy</a>
                        <a className="footer-link">Help Us</a>
                    </div>
                </div>
            </div>
            <div className='footerDiv'>
                All Rights Reserved
            </div>
        </footer >
    );
}