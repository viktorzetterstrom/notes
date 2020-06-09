const todaysDate = () => {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = `${dateObj.getMonth() + 1}`.padStart(2, "0");
  const date = `${dateObj.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${date}`;
};

module.exports = todaysDate;
