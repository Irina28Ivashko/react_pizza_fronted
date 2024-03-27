export const getCartFromLS = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};
