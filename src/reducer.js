export const darkMode = function (state = false, action) {
  var bodyTag = document.querySelector("body");

  switch (action.type) {
    case true:
      bodyTag.classList.add("dark-mode");
      return true;
    case false:
      bodyTag.classList.remove("dark-mode");
      return false;
    default:
      return state;
  }
};
