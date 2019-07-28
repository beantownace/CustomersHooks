import { useContext, useReducer } from "react";
import myContext from "../container/Context";
import customersReducer from "./useCustomersReducer";
import { ActionTypes } from "./types";
const apiUrl = "https://my.api.mockaroo.com/customers/add/?key=08bee540";

function useCustomerAdd(
  first_name: string,
  last_name: string
) {
  const initialState = useContext(myContext);
  const [state, dispatch] = useReducer(customersReducer, initialState);

  let data = { first_name, last_name };
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data =>
      dispatch({ type: ActionTypes.GET_CUSTOMERS_ADD, payload: data })
    )
    .catch(error =>
      dispatch({ type: ActionTypes.GET_CUSTOMERS_ERROR, payload: error })
    );

  return state;
}

export default useCustomerAdd;
