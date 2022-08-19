import client from "./client";

export const getQuestions = async () => {
  const response = await client.get(`/questions`);
  return response.data;
};


