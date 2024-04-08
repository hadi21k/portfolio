import H1 from "../../ui/h1";
import ContactForm from "@/components/shared/Contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="mt-4">
      <div className="container space-y-3 max-sm:px-1">
        <H1 className="text-3xl md:text-4xl">Get in Touch</H1>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
