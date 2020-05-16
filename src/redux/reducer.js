const initialState = {
    test: 'Hello world'
  };

const reducer = (state=initialState, action) => {
    switch (action.type) {
      case "TEST": {
        return { test: action.payload };
      }
      default:
        return state;
    }
  };

  export default reducer;