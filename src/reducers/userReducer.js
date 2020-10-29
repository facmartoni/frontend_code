const initialState = {
  displayModal: { sign: false, login: false },
  userData: localStorage.getItem('TOKEN')
    ? localStorage.getItem('TOKEN')
    : {},
  selection: '',
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'OPEN_SIGNIN':
      return {
        ...state,
        displayModal: { ...state.displayModal, sign: payload },
      };
    case 'OPEN_LOGIN':
      return {
        ...state,
        displayModal: { ...state.displayModal, login: payload },
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        displayModal: { sign: payload, login: payload },
      };
    case 'GET_TOKEN':
      return {
        ...state,
        userData: payload,
      };
    case 'SET_SELECTION':
      return {
        ...state,
        selection: payload,
      };

    default:
      return state;
  }
};
