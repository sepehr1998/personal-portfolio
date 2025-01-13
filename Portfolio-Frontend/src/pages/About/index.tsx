import Typewriter from 'typewriter-effect';
import developerImage from '../../assets/images/development.png';

function About() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <h1>Frontend</h1>
                    <h1 className="text-gradient">Developer</h1>
                    <div className="d-flex flex-row align-items-center display-6">
                        <Typewriter
                            options={{
                                strings: ['Vue', 'React', 'Angular'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        <p className="my-0 mx-1">Developer</p>
                    </div>
                    <br />
                    <p>Experienced frontend developer with +8 years of experience</p>
                </div>

                <div className="col-12 col-md-6 text-center text-md-end">
                    <img src={developerImage} alt="web development" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default About;
