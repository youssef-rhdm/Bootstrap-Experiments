import  { useState } from "react";

export default function ChercheBar({Cherche}) {
  const [query, setQuery] = useState('')
  const HandleQuery = (e)=>{
    setQuery(e.target.value.toUpperCase());
  }
  const HandleSubmit = (e)=>{
    e.preventDefault();
    Cherche(query)
  }
  return (
    <>
      <div>ChercheBar</div>
      <form onSubmit={HandleSubmit}>
        <input value={query} onChange={HandleQuery}  />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
