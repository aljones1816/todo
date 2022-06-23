export const utilties = (function () {
  function generateUniqueID() {
    return Date.now();
  }

  return { generateUniqueID };
})();
