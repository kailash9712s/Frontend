import Navbar from "../../Component/NavBar/navbar";
import Footer from "../../Component/Footer/footer";

import AboutIntroduction from "../../Component/PageIntroduction/PageIntroduction";
import TouchWithUse from "../../Component/GetInTouch/GetInToch";

import AboutHome from "../../assets/image/AboutPage/AboutHome.jpg";
import AboutCard1 from "../../assets/image/AboutPage/AboutCard1.jpg";
import AboutCard2 from "../../assets/image/AboutPage/sPatel.jpeg";

import './about.css';

export default function AboutPage() {

    const statsData = [
        {
            number: "24",
            label: "Years of Experience"
        },
        {
            number: "100",
            label: "Projects Completed"
        },
        {
            number: "100",
            label: "Expert Team Members"
        },
        {
            number: "14",
            label: "Cities Served"
        }
    ];

    const valuesData = [
        {
            icon: "🛡️",
            title: "Quality",
            description: "We never compromise on quality. Every product that leaves our facility meets the highest international standards."
        },
        {
            icon: "🕒",
            title: "Reliability",
            description: "We deliver on our promises. Our clients trust us to complete projects on time, every time."
        },
        {
            icon: "💡",
            title: "Innovation",
            description: "We constantly explore new technologies and methods to improve our products and services."
        },
        {
            icon: "👥",
            title: "Customer Focus",
            description: "Our clients are at the heart of everything we do. We listen, understand, and exceed expectations."
        }
    ];

    return (
        <div className="MainDiv">
            <Navbar />
            <AboutIntroduction Image={AboutHome} heading="About Sat Shri Steel" subHeading="Building the future with strength, precision, and excellence since 2006" />
            <section className="our-story-section">
                <div className="container">
                    <div className="content-wrapper">
                        <div className="image-container">
                            <img
                                src={AboutCard1}
                                alt="Steel construction framework"
                                className="main-image"
                            />
                        </div>

                        <div className="text-content">
                            <div className="story-header">
                                <h2 className="section-title">Our Story</h2>
                                <div className="title-underline"></div>
                            </div>

                            <div className="story-text">
                                <p className="story-paragraph">
                                    Our journey has been marked by continuous innovation, unwavering commitment to quality, and a customer-first approach. We take pride in our ability to deliver complex steel structures that meet the highest standards of safety and durability.
                                </p>

                                <p className="story-paragraph">
                                    Sat Shri Steel was established in 2006 with a vision to revolutionize the steel industry in India. What started as a small manufacturing unit has now grown into one of the most trusted names in steel fabrication and construction.
                                </p>

                                <p className="story-paragraph">
                                    Today, Sat Shri Steel stands as a testament to Indian engineering excellence, with projects spanning across the country and a reputation for reliability that precedes us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="stats-section">
                <div className="stats-container">
                    {statsData.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="core-values-section">
                <div className="values-container">
                    <div className="values-header">
                        <h2 className="values-title">Our Core Values</h2>
                        <p className="values-subtitle">
                            The principles that guide everything we do at Sat Shri Steel
                        </p>
                    </div>

                    <div className="values-grid">
                        {valuesData.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">
                                    {value.icon}
                                </div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="our-leader-section">
                <div className="leader-container">
                    <div className="leader-header">
                        <h2 className="leader-title">Our Leader</h2>
                        <p className="leader-subtitle">
                            The experienced professional who guide Sat Shri Steel towards excellence
                        </p>
                    </div>

                    <div className="leader-content">
                        <div className="leader-card">
                            <div className="leader-image-container">
                                <img
                                    src={AboutCard2}
                                    alt="S. Patel - Chief Executive Officer"
                                    className="leader-image"
                                />
                            </div>
                            <div className="leader-info">
                                <h3 className="leader-name">S. Patel</h3>
                                <p className="leader-position">Chief Executive Officer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TouchWithUse />
            <Footer />
        </div>
    );
}