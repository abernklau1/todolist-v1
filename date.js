
//exports a function that returns today's date
exports.getDate = function () {

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  const today = new Date();

  return today.toLocaleDateString("en-US", options);
};
