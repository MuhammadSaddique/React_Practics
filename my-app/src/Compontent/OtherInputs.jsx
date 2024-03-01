import React, { useState } from "react";

const OtherInputs = () => {
  const [textarea, SetTextArea] = useState("");
  const [selectMenu, SetSelectMenu] = useState("USA");
  const [checked, SetChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("comments :", e.target[0].value);
    console.log("Country :", e.target[1].value);
    console.log("Checked :", e.target[2].checked);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{ verticalAlign: "top" }} htmlFor="">
          Comments:{" "}
        </label>
        <textarea
          value={textarea}
          onChange={(e) => SetTextArea(e.target.value)}
          cols="30"
          rows="5"
        ></textarea>
        <br />
        <br />
        <select
          value={selectMenu}
          onChange={(e) => SetSelectMenu(e.target.value)}
        >
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Uk">Uk</option>
          <option value="Brazil">Brazil</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Yes I agree Terms : </label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => SetChecked(e.target.checked)}
        />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default OtherInputs;
