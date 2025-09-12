import axios from "axios";

export const getServices = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/services/api/get-all`
  );
  return res.data;
};
export const getServicesDetails = async (id) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/services/api/${id}`
  );
  return res.data;
};
