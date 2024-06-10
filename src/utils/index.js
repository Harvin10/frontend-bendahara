const fetchNotionApi = async (url, request = {}) => {
  const response = await fetch(url, {
    method: "GET",
    headers: new Headers({
      "x-api-key": process.env.REACT_APP_NOTION_KEY,
    }),
    ...request,
  });
  return await response.json();
};

const formatMoney = (amount) => {
  const modifiedAmount = parseInt(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${modifiedAmount}`;
};

const splitDate = (date) => {
  const monthMap = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Des",
  };
  const modifiedDate = date.split("-");
  return {
    year: modifiedDate[0],
    month: monthMap[parseInt(modifiedDate[1])],
    day: parseInt(modifiedDate[2]),
  };
};

export { fetchNotionApi, formatMoney, splitDate };
