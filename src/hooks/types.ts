export type Action = {
  type: string;
  payload: {
    id?: string;
    first_name?: string;
    email?: string;
    last_name?: string;
    gender?: string;
  };
};

export const ActionTypes = {
  GET_CUSTOMERS_PENDING: "GET_CUSTOMERS_PENDING",
  GET_CUSTOMERS_SUCCESS: "GET_CUSTOMERS_SUCCESS",
  GET_CUSTOMERS_ERROR: "GET_CUSTOMERS_ERROR",
  GET_CUSTOMERS_ADD: "GET_CUSTOMERS_ADD",
  GET_CUSTOMERS_EDIT: "GET_CUSTOMERS_EDIT",
};
