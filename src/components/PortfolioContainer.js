import React, {useState} from "react";
import NavBar from "./Navbar";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio"; 
import Resume from "./pages/Resume";  
import ContactForm from "./pages/ContactForm";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("AboutMe");

    const renderPage = () => {
        if (currentPage === "AboutMe") {
            return <AboutMe />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
        return <ContactForm />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
