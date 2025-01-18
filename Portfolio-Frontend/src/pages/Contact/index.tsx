import ContactForm from "../../components/ContactForm";
import SocialButtons from "../../components/ContactMethods";

function Contact() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="h-100 d-flex flex-column">
                        <ContactForm />
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="h-100 d-flex flex-column">
                        <SocialButtons />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
