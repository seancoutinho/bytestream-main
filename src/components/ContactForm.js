import { useState } from 'react';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
      } else {
        toast.error('Failed to send message.', response);
      }
    } catch (error) {
      console.error(error);
      toast.error('There was an error sending your message.');
    }
  };

  return (
    <section className="mil-contact mil-gradient-bg mil-p-120-0">
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: 0, right: '10%' }}
      />
      <div className="container">
        <h2 className="mil-light mil-mb-90">
          Contact <span className="mil-accent">Us</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <div className="mil-input-frame mil-mb-30">
                <label>
                  <span className="mil-light">Name</span>
                  <span className="mil-accent">Required</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name Here"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mil-input-frame mil-mb-30">
                <label>
                  <span className="mil-light">Email Address</span>
                  <span className="mil-accent">Required</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mil-input-frame mil-mb-60">
                <label>
                  <span className="mil-light">Phone</span>
                  <span className="mil-light-soft">Optional</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-input-frame mil-mb-30">
                <label>
                  <span className="mil-light">Message</span>
                  <span className="mil-accent">Required</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <p className="mil-text-sm mil-light-soft mil-mb-15">
                We will process your personal information in accordance with our
                Privacy Policy.
              </p>
              <div className="mil-checkbox-frame mil-mb-60">
                <input
                  className="mil-checkbox"
                  id="checkbox-1"
                  type="checkbox"
                  defaultValue="value"
                />
                <label htmlFor="checkbox-1" className="mil-text-sm mil-light">
                  I would like to be contacted with news and updates about your{' '}
                  <a href="#." className="mil-accent">
                    events and services
                  </a>
                </label>
              </div>
            </div>
            <div className="col-12">
              <button className="mil-button mil-accent-bg mil-fw" type="submit">
                <span>Send Message Now</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
