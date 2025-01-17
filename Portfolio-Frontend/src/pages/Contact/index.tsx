import ContactForm from "../../components/ContactForm";
import SocialButtons from "../../components/SocialButtons";

function Contact(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <ContactForm/>
                </div>
                <div className="col-12 col-md-6">
                    <SocialButtons/>
                </div>
            </div>
        </div>
    )
}

export default Contact;
