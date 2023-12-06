async function getAllQuotes() {
  const res = await fetch("http://localhost:8000/quotes");
  const data = await res.json();
  console.log("data", data);
}

export { getAllQuotes };
