import { Action } from "./types";
import { ActionTypes } from "./types";
import _ from "lodash";

const CustomersGetReducer = (
  state: {
    customers: object;
    isError: boolean;
    isPending: boolean;
  },
  action: Action
) => {
  var arrayCustomers: any[] = _.values(state.customers);

  switch (action.type) {
    case ActionTypes.GET_CUSTOMERS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case ActionTypes.GET_CUSTOMERS_SUCCESS:
      return Object.assign(
        {},
        state,
        { customers: action.payload },
        { isPending: false }
      );
    case ActionTypes.GET_CUSTOMERS_ERROR:
      return Object.assign({}, state, { isError: true });
    case ActionTypes.GET_CUSTOMERS_ADD:
      let lastId = _.keys(state.customers).pop();
      let incrementId = lastId ? lastId + 1 : 1;
      return Object.assign({}, state, {
        customers: { ...state.customers, [incrementId]: action.payload }
      });
    case ActionTypes.GET_CUSTOMERS_EDIT:
      var editCustomer = _.filter(arrayCustomers, function(o) {
        return o.id === action.payload.id;
      });
      editCustomer[0].first_name = action.payload.first_name;
      editCustomer[0].last_name = action.payload.last_name;
      editCustomer[0].email = action.payload.email;
      editCustomer[0].gender = action.payload.gender;
      return Object.assign({}, state, {
        customers: { ...state.customers, editId: editCustomer[0] }
      });
    default:
      return state;
  }
};

export default CustomersGetReducer;
