import axios from "axios";

export const createNewsletter = async (email: string) => {
  const response = await axios.post(
    "https://hook.us1.make.com/fl7jbvogr3yzef139xw9o8b9z3felska",
    { email }
  );

  return response;
};
