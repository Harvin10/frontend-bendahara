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
  const modifiedAmount = amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${modifiedAmount}`;
};

export { fetchNotionApi, formatMoney };
