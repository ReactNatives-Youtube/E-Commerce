export const StartUp = 'StartUp';

// Action to get categories and products from db
// This action is run at the start of the application only
export const startUp = param => {
  return async dispatch => {
    
    try {
      const response = await fetch(
        'https://ecommerce-80bdd-default-rtdb.firebaseio.com/.json',
      );
      const responseJSON = await response.json();
      console.log(responseJSON)
      dispatch({
        type: StartUp,
        payload: responseJSON,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
