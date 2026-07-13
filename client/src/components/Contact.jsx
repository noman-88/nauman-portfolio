import './Contact.css';
import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE_URL}/api/contact`, form);
      alert('Message sent successfully.');
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch {
      alert('Server Error');
    }
  };

  return (
    <section className="contact" id="contact">
      <h5>CONTACT</h5>
      <h2>Let's Work Together</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
