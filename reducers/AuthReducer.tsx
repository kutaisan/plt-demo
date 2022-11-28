interface STATE_TYPE {
  isLoading: boolean;
}

type LoginAction =
  | { type: 'SET_LOADING' | 'OFF_LOADING'; }

const AuthReducer = (prevState: STATE_TYPE, action: LoginAction) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...prevState,
        isLoading: true,
      };
    case 'OFF_LOADING':
      return {
        ...prevState,
        isLoading: false,
      };
    default:
      return prevState;
  }
};

export default AuthReducer;
