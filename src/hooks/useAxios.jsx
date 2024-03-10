import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxios(url) {
  const [responce, setResponce] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  axios.defaults.baseURL = "https://api.coingecko.com/api/v3/";

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const res = await axios(url);
      setResponce(res.data);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return { responce, error, loading };
}
