import { useContext, useReducer } from "react";
import myContext from "../container/Context";
import customersReducer from "./useCustomersReducer";
import { ActionTypes } from "./types";
const apiUrl = "https://my.api.mockaroo.com/customers/edit/";

function useCustomerEdit(
  id: string,
  first_name: string,
  last_name: string,
  email: string
) {
  const initialState = useContext(myContext);
  const [state, dispatch] = useReducer(customersReducer, initialState);

  let data = {
    first_name,
    last_name,
    email
  };
  fetch(apiUrl + { id } + "?key=08bee540", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data =>
      dispatch({ type: ActionTypes.GET_CUSTOMERS_EDIT, payload: data })
    )
    .catch(error =>
      dispatch({ type: ActionTypes.GET_CUSTOMERS_ERROR, payload: error })
    );

  return state;
}

export default useCustomerEdit;
