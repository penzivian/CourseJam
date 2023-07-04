export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_CREATE_REQUEST":
      return {
        loading: true,
      };
    case "ORDER_CREATE_SUCCESS":
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case "ORDER_CREATE_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItem: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case "ORDER_DETAILS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ORDER_DETAILS_SUCCESS":
      return {
        loading: false,
        order: action.payload,
      };
    case "ORDER_DETAILS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    case "ORDER_DETAILS_RESET":
      return {
        loading: true,
        orderItem: [],
        shippingAddress: {},
      };
    default:
      return state;
  }
};

export const orderListMyReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "ORDER_LIST_MY_REQUEST":
      return {
        loading: true,
      };
    case "ORDER_LIST_MY_SUCCESS":
      return {
        loading: false,
        orders: action.payload,
      };
    case "ORDER_LIST_MY_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    case "ORDER_LIST_MY_RESET":
      return {
        orders: [],
      };
    default:
      return state;
  }
};

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "ORDER_LIST_REQUEST":
      return {
        loading: true,
      };
    case "ORDER_LIST_SUCCESS":
      return {
        loading: false,
        orders: action.payload,
      };
    case "ORDER_LIST_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_DELIVER_REQUEST":
      return {
        loading: true,
      };
    case "ORDER_DELIVER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ORDER_DELIVER_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    case "ORDER_DELIVER_RESET":
      return {};
    default:
      return state;
  }
};
