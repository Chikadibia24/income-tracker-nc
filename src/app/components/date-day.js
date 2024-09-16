"use client";

import { useState } from "react";

const DateDay = ({ datum }) => {


  // const [input, setInput] = useState<number | string>(0);
  // const [message, setMessage] = useState("");
  // const [data, setData] = useState<any>([]);

  // const handleChange = (event) => {
  //   setInput(Number(event.target.value));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   setMessage("Income saved successfully!");
  //   setTimeout(() => {
  //     setMessage("");
  //   }, 3000);
  //   alert(`Your income is ${input}`);

  //   const newData = { income: input };
  //   //localStorage.setItem("income", input);
  //   setData([...data, newData]);
  //   console.log(data);
  //   console.log(data.length);
  //   setInput("");
  // };

  return (
    <section className="w-[100%] max-h-[450px] overflow-y-auto py-[15px] px-[15px] flex flex-col items-center gap-1 border-t-[1px] border-dashed border-slate-950 shadow-xl">
      <div className="date-incomes-wrapper w-[100%] flex items-center justify-between">
        <h3 className="text-[20px] font-[600]">Date</h3>
        <h3 className="text-[20px] font-[600]">Income</h3>
      </div>

      <div className="date-incomes-wrapper w-[100%] flex flex-col-reverse">
        {datum
          ? datum.map((item, index) => (
              <div
                key={index}
                className="date-incomes-wrapper w-[100%] flex items-center justify-between hover:bg-slate-200"
              >
                <h3 className="text-[16px] font-[600]">{item.date}</h3>

                <h3>
                  <span className="text-[16px] font-[600]">USD: </span>
                  <span className="text-[20px] font-bold text-[teal]">
                    {item.income}
                  </span>
                </h3>
              </div>
            ))
          : null}
      </div>

      {/* <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[15px] items-center justify-center bg-slate-950 w-[350px] h-[250px] rounded-md"
      >
        <p className="text-[16px] text-white">{message}</p>
        <label htmlFor="income" className="text-[20px] text-white p-0 m-0">
          Enter Income
        </label>
        <input
          required
          value={input}
          type="number"
          className="text-[20px] h-[40px] w-[200px] rounded"
          onChange={handleChange}
        />
        <button className="text-[22px] text-white font-bold w-[200px] h-[50px] bg-slate-900 rounded-[4px]">
          Save
        </button>
      </form> */}
    </section>
  );
};
export default DateDay;
