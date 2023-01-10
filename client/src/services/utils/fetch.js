import { useState, useEffect } from "react";

import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/";

export const fetchApi = axios.create({
  baseURL: BASE_URL,
});

export const useGet = (url) => {
  const [fetchResultData, setFetchResultData] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const handleMakeRequest = async () => {
    const { data, status } = await fetchApi.get(url);

    try {
      if (status === 200) {
        setFetchResultData({
          status: "success",
          data,
        });
        setIsLoading(false);
      } else {
        setFetchResultData({
          status: "error",
          message: data,
        });
        setIsLoading(false);
      }
    } catch (err) {
      setFetchResultData({
        status: "error",
        message: err,
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleMakeRequest();
    return () => {
      handleMakeRequest();
    };
  }, [url]);

  return { fetchResultData, isLoading };
};

export const usePost = (isAllow, url, postData) => {
  const [fetchResultData, setFetchResultData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = async () => {
    setIsLoading(true);
    if (isAllow) {
      try {
        const response = await fetchApi.post(url, postData);

        const isFetchSuccess = response.data.status === "success";

        if (isFetchSuccess) {
          // ? Case success
          setFetchResultData({
            status: "success",
            data: response.data.data,
          });
        } else {
          setFetchResultData({
            status: "error",
            message: response.data.message,
          });
          // ! Case fail
        }
      } catch (err) {
        setFetchResultData({
          status: "error",
          message: err,
        });
      }
    } else {
      console.log(`isAllow: ${isAllow} - Waiting for permission!`);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    handleFetch();

    return () => handleFetch();
  }, [postData]);

  return {
    fetchResultData,
    isLoading,
  };
};
