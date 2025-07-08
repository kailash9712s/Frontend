import './PageIntroduction.css';

export default function HomeIntroduction({Image, heading, subHeading}) {
    return (
        <div className="hero-container">
            <div className="hero-background">
                <img src={Image} alt="Sat Shri Steel Background" />
            </div>

            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1 className="hero-title">
                    {heading}
                </h1>
                <p className="hero-subtitle">
                    {subHeading}
                </p>
            </div>
        </div>
    );
}