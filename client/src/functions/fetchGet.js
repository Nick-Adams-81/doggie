const fetchGet = async () => {
  const data = await fetch("http://localhost:4567/low-stock");
  const jsonData = await data.json();
  return jsonData;
};
export default fetchGet;
