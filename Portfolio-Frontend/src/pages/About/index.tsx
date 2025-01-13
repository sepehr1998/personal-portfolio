import Typewriter from 'typewriter-effect';
import developerImage from '../../assets/images/developer.png'

function About(){
    return(
        <div className="d-grid">
            <div className="row">
                <div className="col">
                    <h1>Frontend</h1>
                    <h1>Developer</h1>
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
                </div>
                <div className="col text-end">
                    <img src={developerImage} alt='web developer' />
                </div>
            </div>
        </div>
    )
}

export default About;
