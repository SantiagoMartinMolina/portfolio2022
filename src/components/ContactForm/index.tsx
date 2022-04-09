import { StyledContactForm } from "./styles";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9qico7k",
        "template_jit8309",
        e.currentTarget,
        "user_L6pDIzPRsaEAd0WOYmj8C"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
  };

  return (
    <StyledContactForm data-scroll-section>
      <form onSubmit={sendEmail}>
        <div>
          <input type="text" placeholder="Nombre" name="from_name" required />
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <textarea placeholder="Mensaje" name="message" required />
        <button type="submit">send</button>
      </form>
    </StyledContactForm>
  );
};

export default ContactForm;
