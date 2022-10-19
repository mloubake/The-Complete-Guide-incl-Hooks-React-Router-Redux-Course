import { useCallback, useState } from "react";
import { ITask } from "../App";

import { ITasks } from "../components/Tasks/Tasks";

export interface IRequestConfig {
  url: string;
  HTTPConfig?: RequestInit;
}

export interface IError {
  message: string;
}

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<IError | null | boolean>(null);

  const sendRequest = useCallback(
    async (
      requestConfig: IRequestConfig,
      applyData: (taskObj: Array<ITask>) => void
    ) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.HTTPConfig?.method
            ? requestConfig.HTTPConfig?.method
            : "GET",
          headers: requestConfig.HTTPConfig?.headers
            ? requestConfig.HTTPConfig?.headers
            : {},
          body: requestConfig.HTTPConfig?.body
            ? JSON.stringify(requestConfig.HTTPConfig?.body)
            : null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        applyData(data);
      } catch (error: any) {
        setError(error.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    []
  );

  return { isLoading, error, sendRequest };
};

export default useHttp;
