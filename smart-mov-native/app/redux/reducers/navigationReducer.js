import PrimaryNav from "~/navigation";
const initialState = PrimaryNav.router.getStateForAction(
  PrimaryNav.router.getActionForPathAndParams("loginStack")
);
const navigationReducer = (state = initialState, action) => {
  const newState = PrimaryNav.router.getStateForAction(action, state);
  return newState || state;
};

export default navigationReducer;
