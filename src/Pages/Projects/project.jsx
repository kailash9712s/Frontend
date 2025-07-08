import Navbar from "../../Component/NavBar/navbar"
import Footer from "../../Component/Footer/footer"

import AboutIntroduction from "../../Component/PageIntroduction/PageIntroduction";
import TouchWithUse from "../../Component/GetInTouch/GetInToch";

import AboutProject from "../../assets/image/ProjectPage/ProjectIntro.jpeg";
import Card1 from "../../assets/image/ProjectPage/cardImage1.jpg";
import Card2 from "../../assets/image/ProjectPage/cardImage2.jpg";
import Card3 from "../../assets/image/ProjectPage/cardImage3.jpg";
import Card4 from "../../assets/image/ProjectPage/cardImage4.jpg";

import './project.css';

export default function ProjectPage() {

    const projectsData = [
        {
            id: 1,
            image: Card1,
            category: "Industrial",
            title: "Steel Manufacturing Facility",
            description: "A state-of-the-art steel manufacturing facility with advanced production capabilities.",
            location: "Mumbai, Maharashtra",
            year: "2022"
        },
        {
            id: 2,
            image: Card2,
            category: "Dom",
            title: "Dom",
            description: "A complex featuring innovative steel architecture and sustainable design.",
            location: "Surat,Gujarat",
            year: "2021"
        },
        {
            id: 3,
            image: Card3,
            category: "Dom",
            title: "Dom",
            description: "material used in dom is isi certified steel. A complex featuring innovative steel architecture and sustainable design.",
            location: "Surat,Gujarat",
            year: "2022"
        },
        {
            id: 4,
            image: Card4,
            category: "Industrial",
            title: "Industrial Complex",
            description: "Large-scale industrial complex with modern steel framework and efficient design.",
            location: "Pune, Maharashtra",
            year: "2023"
        }
    ]

    return (
        <div className="MainDiv">
            <Navbar />
            <AboutIntroduction Image={AboutProject} heading="About Sat Shri Steel" subHeading="Building the future with strength, precision, and excellence since 2006" />
            <section className="projects-section">
                <div className="projects-container">
                    <div className="projects-header">
                        <button className="all-projects-btn">All Projects</button>
                    </div>

                    <div className="projects-grid">
                        {projectsData.map((project) => (
                            <div key={project.id} className="project-card">
                                <div className="project-image-container">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                    />
                                    <div className="project-overlay"></div>
                                </div>

                                <div className="project-content">
                                    <div className="project-meta">
                                        <span className="project-category">{project.category}</span>
                                    </div>

                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-footer">
                                        <div className="project-location">
                                            <span className="location-icon">📍</span>
                                            <span>{project.location}</span>
                                        </div>
                                        <div className="project-year">
                                            <span className="year-icon">📅</span>
                                            <span>{project.year}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <TouchWithUse />
            <Footer />
        </div>
    );
}
