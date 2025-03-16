import axios from "axios";
import { useEffect, useState } from "react";

const useApiFetcher = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setError(null);
      try {
        const response = await axios.get(url);

        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return [data, isLoading, error];
};

export default useApiFetcher;
