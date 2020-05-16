export const changeText = (dispatch, payload) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: "TEST",
        payload
      });
      resolve();
    });
  };