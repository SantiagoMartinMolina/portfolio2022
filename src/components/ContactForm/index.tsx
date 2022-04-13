import { StyledContactForm } from "./styles";
import emailjs from "@emailjs/browser";
import SocialMediaLinks from "../SocialMediaLinks";
import { FC } from "react";

interface Props {
  getTexts: (key: string) => {
    [key: string]: string;
  };
}

const ContactForm: FC<Props> = ({ getTexts }) => {
  const text = getTexts("contactForm");
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
    <StyledContactForm data-scroll-section id="contact">
      <h2 className="title">
        <span data-scroll>{text.contact}</span>
      </h2>
      <form onSubmit={sendEmail}>
        <div>
          <input
            type="text"
            placeholder={text.name}
            name="from_name"
            required
          />
          <input type="email" placeholder={text.email} name="email" required />
        </div>
        <textarea placeholder={text.message} name="message" required />
        <button type="submit">{text.send}</button>
      </form>
      <div className="container">
        <SocialMediaLinks getTexts={getTexts} />
        <p>{text.email1}</p>
      </div>
    </StyledContactForm>
  );
};

export default ContactForm;
