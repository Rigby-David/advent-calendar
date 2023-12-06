async function getAllQuotes(id: number) {
  const res = await fetch(`http://localhost:8000/quotes/${id}`);
  const results = await res.json();
  return results;
}

export { getAllQuotes };
