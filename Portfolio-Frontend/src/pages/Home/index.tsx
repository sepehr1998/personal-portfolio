import Overview from "../Overview"
import About from "../About"

function Home() {
    return(
        <div className="px-5 text-light">
            <div id="overview" className="mt-5">
                <Overview/>
                <About/>
            </div>
        </div>
    )
}

export default Home;
