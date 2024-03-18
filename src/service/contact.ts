import axios from "axios";
import { ContactProps } from "../types/contact";

export const createContact = async (data: ContactProps) => {
  const response = await axios.post(
    "https://hook.us1.make.com/hasun3mok6lty4w9qft1cfi5yhcnrj6v",
    data
  );

  return response;
};
