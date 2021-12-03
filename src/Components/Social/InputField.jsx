import { useInput } from "../../Hooks/useInput";
import emailjs from "emailjs-com";
import { useState } from "react";

const InputField = () => {
  const serviceId = "service_eiubci3";
  const templateId = "template_xdmcazt";
  const userId = "user_d8DcekEisfi8mtui3Kt2C";
  const [isSending, setIsSending] = useState({
    isSending: false,
    sendingMessage: "Send Message",
  });
  const [email, emailAttributes, setEmail] = useInput();
  const [textArea, textAreaAttributes, setTextArea] = useInput();
  const [name, nameAttributes, setName] = useInput();
  const sendMessage = async (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || textArea.length === 0) {
      alert("Please fill all the fields");
      return;
    }
    try {
      setIsSending({ isSending: true, sendingMessage: "Sending..." });
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          to_name: "Hadi Diab",
          message: textArea,
          email,
        },
        userId
      );
    } catch (err) {
      alert(err);
    } finally {
      setIsSending({ ...isSending, sendingMessage: "Send Message" });
      setEmail("");
      setTextArea("");
      setName("");
    }
  };
  return (
    <>
      <form
        onSubmit={sendMessage}
        className="flex flex-col w-full h-auto mt-6 space-y-3 text-black md:w-1/2"
      >
        <div className="flex flex-col items-center space-x-0 space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
          <input
            {...nameAttributes}
            type="text"
            className="sm:w-1/2 w-full p-2 font-medium rounded-lg outline-none dark:placeholder-[#111e27] bg-red-500 dark:bg-[#ffce45] text-white dark:text-[#111e27] placeholder-white"
            placeholder="Your Name"
            id="from_name"
          />
          <input
            {...emailAttributes}
            type="email"
            className="sm:w-1/2 w-full p-2 font-medium rounded-lg outline-none dark:placeholder-[#111e27] bg-red-500 dark:bg-[#ffce45] text-white dark:text-[#111e27] placeholder-white"
            placeholder="Email Address"
          />
        </div>
        <textarea
          name="textarea"
          cols="50"
          rows="10"
          placeholder="Your Message"
          className="p-2 font-medium rounded-lg outline-none dark:placeholder-[#111e27] bg-red-500 dark:bg-[#ffce45] placeholder-white text-white dark:text-[#111e27]"
          id="message"
          {...textAreaAttributes}
        />
        <input
          type="submit"
          className="w-full py-2 bg-red-500 rounded-lg dark:bg-[#ffce45] font-medium text-white dark:text-[#111e27] cursor-pointer"
          value={isSending.sendingMessage}
        />
      </form>
    </>
  );
};

export default InputField;
