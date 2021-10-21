export const not = (value) => !value;
export const wrapWithEvent = (eventName, dispatch) => (fn) => (...args) => {
  if (fn(...args)) {
    dispatch(eventName);
  }
};