async function getAllQuotes() {
  const res = await fetch("http://localhost:8000/quotes");
  const results = await res.json();
  return results;
}

export { getAllQuotes };
