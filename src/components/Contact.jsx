import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import '../css/contact.css';
import '../css/main.css';


export default function Contact() {
  return (
    <section id="contact" class="columns">
        <ContactForm />
        <ContactInfo />
    </section>
  );
}
