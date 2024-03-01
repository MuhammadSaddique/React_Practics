import React from "react";

const MultipleCheck = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    console.log(value,checked)
  };

  return (
    <div>
      <form>
        <label htmlFor="">Select Fruits : &nbsp;</label>
        <input
          type="checkbox"
          name="fruits"
          value="Apple"
          onChange={handleChange}
        />
        <label htmlFor="">&nbsp; Apple</label>

        <input
          type="checkbox"
          name="fruits"
          value="Banana"
          onChange={handleChange}
        />
        <label htmlFor="">&nbsp; Banana</label>

        <input
          type="checkbox"
          name="fruits"
          value="Mango"
          onChange={handleChange}
        />
        <label htmlFor="">&nbsp; Mango</label>

        <input
          type="checkbox"
          name="fruits"
          value="Amrook"
          onChange={handleChange}
        />
        <label htmlFor="">&nbsp; Amrook</label>

        <input
          type="checkbox"
          name="fruits"
          value="Dates"
          onChange={handleChange}
        />
        <label htmlFor="">&nbsp; Dates</label>
        <br />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default MultipleCheck;
