import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [buttonText, setButtonText] = useState("Send Message");
  const [isMessageSent, setIsMessageSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setButtonText("Sending...");
    setIsMessageSent(false);

    emailjs
      .sendForm(
        "service_7b0odow",
        "template_9bzya9c",
        form.current,
        "tbG5Vov4LC8oh5b2O"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText("Sent");
          setIsMessageSent(true);
          toast.success("Message sent successfully!", {
            theme: "colored",
          });

          form.current.user_name.value = "";
          form.current.user_email.value = "";
          form.current.message.value = "";

          setTimeout(() => {
            setButtonText("Send Message");
            setIsMessageSent(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setButtonText("Send Message");
          setIsMessageSent(false);

          setTimeout(() => {
            setButtonText("Send Message");
            setIsMessageSent(false);
          }, 3000);

          console.error("Error sending email:", error);
          toast.error("Error sending email.");
          setButtonText("Send Message");
          setIsMessageSent(false);
        }
      );
  };

  return (
    <FormContext.Provider
      value={{
        sendEmail,
        emailjs,
        form,
        buttonText,
        isMessageSent,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
