import Overview from "../Overview"
import About from "../About"
import Contact from "../Contact";
import Portfolio from "../Portfolio";

function Home() {
    return(
        <div className="px-5 text-light">
            <div id="overview" className="mt-5">
                <Overview/>
            </div>
            <div id="about" className="mt-5">
                <About/>
            </div>
            <div id="portfolio" className="mt-5">
                <Portfolio/>
            </div>
            <div id="contact" className="mt-5">
                <Contact/>
            </div>
        </div>
    )
}

export default Home;
