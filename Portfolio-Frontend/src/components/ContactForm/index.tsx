import './contact-form.css'

function ContactForm() {
    return(
        <div className="form-body">
            <h1 className="text-gradient">Get in Touch</h1>
            <form className="container mt-5">
                <div className="form-floating mb-4 input-with-icon">
                    <input
                        type="text"
                        className="form-control form-control-field"
                        id="title"
                        placeholder="Title"
                    />
                    <label htmlFor="title">Name</label>
                </div>
                <div className="form-floating mb-4 input-with-icon">
                    <input
                        type="text"
                        className="form-control form-control-field"
                        id="name"
                        placeholder="Title"
                    />
                    <label htmlFor="title">Title</label>
                </div>

                <div className="form-floating mb-4 input-with-icon">
                    <input
                        type="email"
                        className="form-control form-control-field"
                        id="email"
                        placeholder="Email"
                    />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="form-floating mb-4 input-with-icon">
                    <textarea
                        className="form-control form-control-field"
                        id="message"
                        placeholder="Message"
                        style={{height: '150px'}}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                </div>

                <button type="submit" className="btn button-gradient w-50 text-light">
                    Submit
                </button>
            </form>

        </div>
    )
}

export default ContactForm
