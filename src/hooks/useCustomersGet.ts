import { useReducer, useEffect } from "react";
import cutomersReducer from "./useCustomersReducer";
import { ActionTypes } from "./types";
const apiUrl = "https://my.api.mockaroo.com/customers?key=08bee540";

function useCustomersGet(currentState: any) {
  const [state, dispatch] = useReducer(cutomersReducer, currentState);

  useEffect(() => {
    dispatch({ type: ActionTypes.GET_CUSTOMERS_PENDING, payload: {} });
    const fetchData = async () => {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data =>
          dispatch({ type: ActionTypes.GET_CUSTOMERS_SUCCESS, payload: data })
        )
        .catch(error =>
          dispatch({ type: ActionTypes.GET_CUSTOMERS_ERROR, payload: error })
        );
    };

    fetchData();
  }, []);

  return state;
}

export default useCustomersGet;
