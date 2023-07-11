import React, {useState} from "react";
import NavBar from "./NavBar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects"; 
import Resume from "./pages/Resume";  
import ContactForm from "./pages/ContactForm";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("AboutMe");

    const renderPage = () => {
        if (currentPage === "AboutMe") {
            return <AboutMe />;
        }
        if (currentPage === "Projects") {
            return <Projects />;
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
