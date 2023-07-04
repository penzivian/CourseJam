import axios from "axios";
import { ApiConfig } from "../App";

export const listProducts =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "PRODUCT_LIST_REQUEST" });
      const { data } = await axios.get(
        `${ApiConfig.endpoint}/products?keyword=${keyword}`
      );
      dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "PRODUCT_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_TOP_REQUEST" });
    const { data } = await axios.get(`${ApiConfig.endpoint}/products/top`);
    dispatch({ type: "PRODUCT_TOP_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "PRODUCT_TOP_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAILS_REQUEST" });
    const { data } = await axios.get(`${ApiConfig.endpoint}/products/${id}`);
    dispatch({ type: "PRODUCT_DETAILS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "PRODUCT_DETAILS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "PRODUCT_CREATE_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `${ApiConfig.endpoint}/products`,
      {},
      config
    );

    dispatch({
      type: "PRODUCT_CREATE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_CREATE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "PRODUCT_DELETE_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`${ApiConfig.endpoint}/products/${id}`, config);

    dispatch({
      type: "PRODUCT_DELETE_SUCCESS",
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_DELETE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "PRODUCT_UPDATE_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `${ApiConfig.endpoint}/products/${product._id}`,
      product,
      config
    );

    dispatch({
      type: "PRODUCT_UPDATE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_UPDATE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const productCreateReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "PRODUCT_CREATE_REVIEW_REQUEST",
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `${ApiConfig.endpoint}/products/${productId}/reviews`,
        review,
        config
      );

      dispatch({
        type: "PRODUCT_CREATE_REVIEW_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "PRODUCT_CREATE_REVIEW_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
