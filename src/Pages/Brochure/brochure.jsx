import Navbar from "../../Component/NavBar/navbar"
import './brochure.css';
import Footer from '../../Component/Footer/footer'
import Pdf from '../../assets/pdf/Brochure.pdf';

export default function BrochurePage() {

    return (
        <>
            <div className="head">
                <Navbar />
                <div className="body">
                    <div className="card">
                        <span style={{ color: 'black', fontSize: 70 }}>&#128462;</span>
                        <h1 className="DownlaodHeading">Download Our Brochure</h1>

                        <p className="DownloadParagraph">Get detailed information about our products, services, and projects. Download our comprehensive brochure to learn more about Sat Shri Steel.</p>

                        <a href={Pdf} className="DownloadButton">Download Brochure</a>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}