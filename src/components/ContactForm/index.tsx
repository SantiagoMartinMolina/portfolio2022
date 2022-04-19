import { StyledContactForm } from "./styles";
import emailjs from "@emailjs/browser";
import SocialMediaLinks from "../SocialMediaLinks";
import { FC, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import useLanguageContext from "../../hooks/useLanguageContext";

const ContactForm: FC = () => {
  const {
    dispatch: { getTexts },
  } = useLanguageContext();
  const text = getTexts("contactForm");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(false);
    setLoading(true);

    emailjs
      .sendForm(
        "service_9qico7k",
        "template_jit8309",
        e.currentTarget,
        "user_L6pDIzPRsaEAd0WOYmj8C"
      )
      .then(
        (result) => {
          setLoading(false);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
  };

  return (
    <StyledContactForm data-scroll-section id="contact">
      <h2 className="title">
        <span data-scroll>{text.contact}</span>
      </h2>
      <form onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">{text.nameLabel}</label>
          <input
            id="name"
            type="text"
            placeholder={text.name}
            name="from_name"
            required
          />
          <label htmlFor="email">{text.emailLabel}</label>
          <input
            id="email"
            type="email"
            placeholder={text.email}
            name="email"
            required
          />
        </div>
        <label htmlFor="message">{text.messageLabel}</label>
        <textarea
          id="message"
          placeholder={text.message}
          name="message"
          required
        />
        <button type="submit" disabled={loading ? true : undefined}>
          {loading && <ImSpinner2 className="spinner" />}
          {loading && text.sending}
          {!loading && text.send}
        </button>
        {sent && (
          <p className="success">
            <span className="success-text">{text.success}</span>
          </p>
        )}
      </form>
      <div className="container">
        <SocialMediaLinks getTexts={getTexts} />
        <a className="btn-email" href="mailto:molina.santiago.martin@gmail.com">
          {text.email1}
        </a>
      </div>
    </StyledContactForm>
  );
};

export default ContactForm;
