"use client";

import { useState } from "react";
import DateDay from "./date-day";

const InputForm = () => {
  const [input, setInput] = useState(0)
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setInput(Number(event.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Income saved successfully!");
    setTimeout(() => {
      setMessage("");
    }, 3000);
    //alert(`Your income is ${input}`);

    const newData = { date: new Date().toLocaleDateString(), income: input };
    //localStorage.setItem("income", input);
    setData([...data, newData]);
    data.reverse();
    console.log(data);
    //console.log(displayFromTop);
    console.log(data.length);
    //console.log(displayFromTop.length);
    setInput("");
  };

  return (
    <div className="date-incomes-wrapper w-[100%] h-[auto] flex flex-col items-center gap-[20px]">
      <DateDay datum={data} />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[15px] items-center justify-center bg-slate-950 w-[98%] h-[250px] rounded-md"
      >
        <p className="text-[16px] text-white">{message}</p>
        <label htmlFor="income" className="text-[20px] text-white p-0 m-0">
          Enter Income
        </label>
        <input
          required
          placeholder={`${0}`}
          value={input}
          type="number"
          className="text-[20px] h-[40px] w-[200px] rounded"
          onChange={handleChange}
        />
        <button className="text-[22px] text-white font-bold w-[200px] h-[50px] bg-slate-900 rounded-[4px]">
          Save
        </button>
      </form>
    </div>
  );
};
export default InputForm;
