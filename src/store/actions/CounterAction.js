export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export function doIncrement() {
  return {
    type: INCREMENT,
  };
}
export const doDecrement = () => {
  return {
    type: DECREMENT,
  };
};
export function doReset() {
  return {
    type: RESET,
  };
}
