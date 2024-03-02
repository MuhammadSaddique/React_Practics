import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParms, SetSearhParms] = useSearchParams();
  const handleSerch = (e) => {
    e.preventDefault();
    const data = searchParms.get("q");
    alert(data);
  };
  return (
    <div>
      <h1>This is Search Page</h1>
      <form onSubmit={handleSerch}>
        <label htmlFor="">Search</label>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => SetSearhParms({ q: e.target.value })}
        />
        <br />
        <br />
        <input type="submit" value="Search" />
        <input type="submit" value="reset" onClick={() => SetSearhParms({ })} />
      </form>
    </div>
  );
};

export default Search;
