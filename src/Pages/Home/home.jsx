import Navbar from "../../Component/NavBar/navbar";
import Footer from "../../Component/Footer/footer";
import SlideAnimation from "../../Component/Slider/imageSlideAnimation";
import Partner1 from '../../assets/image/Partners/JindalSteel.webp';
import Partner2 from '../../assets/image/Partners/AdiyaBirla.avif';
import Partner3 from '../../assets/image/Partners/EslSteel.png';
import Partner4 from '../../assets/image/Partners/Jsw.png';

import IntroductionVideo from '../../assets/Video/introduction.mp4?url';

import Logo from '../../assets/image/Logo.jpg';

import './home.css';

import Worker1 from '../../assets/image/HomePage/Random1.jpg';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {

    const [firstRequest, setFirstRequest] = useState(false);
    const [secondRequest, setSecondRequest] = useState(false);



    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        "name": "",
        "email": "",
        "subject": "",
        "idea": ""
    });

    const [email, setEmail] = useState("");



    const partners = [
        {
            id: 1,
            name: 'Jindal Steel & Power',
            logo: Partner1,
            url: "https://www.jindalsteel.com/"
        },
        {
            id: 2,
            name: 'Aditya Birla',
            logo: Partner2,
            url: "https://www.adityabirla.com/"
        },
        {
            id: 3,
            name: 'Hindalco',
            logo: Partner3,
            url: "https://www.hindalco.com/"
        },
        {
            id: 4,
            name: 'JSW',
            logo: Partner4,
            url: "https://www.jsw.in/"
        }
    ];

    const stateChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({
            ...prev,
            [name]: value
        }));
    }


    const submitData = () => {
        if (firstRequest) return;

        setFirstRequest(true);

        alert("We soon contact you!");
        axios.post('https://testproject-u7vq.onrender.com/api/v1/user/ClientRegister', userInfo).then(
            response => {
                console.log(response);
                alert("We soon contact you!");

            }).catch(error => {
                console.log(error);
                alert("Failed ", error);
            });

        setFirstRequest(false);
    }

    const submitEmail = () => {
        if (secondRequest) return;

        setSecondRequest(true);

        axios.post('https://testproject-u7vq.onrender.com/api/v1/user/EmailSub', { "email": email }).then(response => {
            console.log(response);
            alert("Done");

        }).catch(error => {
            console.log(error);
            alert("Failed ", error);
        });

        setSecondRequest(false);
    }

    const goTOAbout = () => {
        navigate('/About');
        window.scrollTo(0, 0);
    }

    return (
        <div className="MainDiv">
            <Navbar />
            <SlideAnimation />
            <div className="column1">
                <img src={Worker1} alt="workerImage" className="workerImage" />
                <div className="fabrication-container">
                    <h1 className="fabrication-title">
                        Our SAT Febrication
                    </h1>

                    <div className="fabrication-content">
                        <p className="fabrication-description">
                            Sat Shree Fabrication is a trusted name in the field of metal and structural fabrication, known for delivering high-quality solutions tailored to the needs of various industries. With a commitment to excellence and customer satisfaction, Sat Shree Fabrication specializes in the design, manufacturing, and installation of a wide range of fabricated products, including industrial sheds, steel structures, gates, railings, and custom metal works.
                        </p>
                    </div>

                    <div className="fabrication-services">
                        <span className="service-highlight">Industrial</span>
                        <span className="service-text">steel structure</span>
                    </div>

                    <div className="fabrication-buttons">
                        <button className="btn-primary" onClick={goTOAbout}>
                            About Us
                        </button>

                        <button className="btn-secondary">
                            SEE MORE
                            <svg
                                className="arrow-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="trusted-partners">
                <h2 className="partners-title">Our Trusted Partners</h2>
                <div className="partners-grid">
                    {partners.map((partner) => (
                        <div key={partner.id} className="partner-card">
                            <a href={partner.url}>
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="partner-logo"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <section className="section video" id="video">
                <div className="video-container container">
                    <h4 className="section-subtitle"><i>Our Work</i></h4>
                    <h2 className="section-title">Watch Our Process</h2>
                    <div className="video-content">
                        <video controls className="work-video">
                            <source src={IntroductionVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>
            <section className="subscribe-section">
                <div className="subscribe-container">
                    <div className="subscribe-header">
                        <img src={Logo} alt="Sat Shri Steel" className="logo" />
                        <h2 className="company-name">Sat Shri Steel</h2>
                    </div>

                    <p className="subscribe-description">
                        Steel structure fabrication is the process of transforming raw steel into predefined shapes and components that are used to build frameworks for buildings, bridges, industrial plants, and other infrastructure. It is a meticulous process that combines engineering precision with skilled craftsmanship.
                    </p>

                    <form className="subscribe-form" onSubmit={(e) => {
                        e.preventDefault();
                        submitEmail();
                    }}>
                        <input
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="email@example.com"
                            className="email-input"
                        />
                        <button type="submit" className="subscribe-button">Subscribe</button>
                    </form>
                </div>
            </section>
            <section id="contact" className="contact-section">
                <div className="container">
                    <h4 className="subtitle">Contact Us</h4>
                    <h2 className="title">Get In Touch</h2>
                    <form className="contact-form" onSubmit={(e) => {
                        e.preventDefault();
                        submitData();
                    }}>
                        <input name="name" className="input1" type="text" placeholder="Your Name" value={userInfo.name} onChange={stateChange} required />
                        <input name="email" className="input1" type="email" placeholder="Your Email" value={userInfo.email} onChange={stateChange} required />
                        <input name="subject" className="input1" type="text" placeholder="Subject" value={userInfo.subject} onChange={stateChange} required />
                        <textarea name="idea" className="input1" placeholder="Your Message" rows="5" value={userInfo.idea} onChange={stateChange} required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    )
}