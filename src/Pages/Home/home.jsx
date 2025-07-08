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

export default function HomePage() {

    const partners = [
        {
            id: 1,
            name: 'Jindal Steel & Power',
            logo: Partner1
        },
        {
            id: 2,
            name: 'Aditya Birla',
            logo: Partner2
        },
        {
            id: 3,
            name: 'Hindalco',
            logo: Partner3
        },
        {
            id: 4,
            name: 'JSW',
            logo: Partner4
        }
    ];

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
                        <button className="btn-primary">
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
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="partner-logo"
                            />
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

                    <form className="subscribe-form">
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="email-input"
                        />
                        <button type="submit" className="subscribe-button">Subscribe</button>
                    </form>
                </div>
            </section>
            <section id="contact" class="contact-section">
                <div class="container">
                    <h4 class="subtitle">Contact Us</h4>
                    <h2 class="title">Get In Touch</h2>
                    <form class="contact-form">
                        <input className="input1" type="text" placeholder="Your Name" required />
                        <input className="input1" type="email" placeholder="Your Email" required />
                        <input className="input1" type="text" placeholder="Subject" required />
                        <textarea className="input1" placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    )
}
