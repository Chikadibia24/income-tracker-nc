"use client";

import { useState, useEffect } from "react";
import DateDay from "./date-day";

const InputForm = () => {
  const [input, setInput] = useState({ date: "", income: "" * 1, remark: "" });
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Fetch data from local storage when component mounts
  useEffect(() => {
    try {
      const dataFromLocalStorage = localStorage.getItem("data");
      if (dataFromLocalStorage) {
        setData(JSON.parse(dataFromLocalStorage));
      }
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Income saved successfully!");

    setTimeout(() => {
      setMessage("");
    }, 3000);

    //alert(`Your income is ${input}`);

    //const newData = { date: new Date().toLocaleDateString(), income: input };

    // const savedData = [...data, newData];

    let savedData;

    if (isEditing) {
      // Update the specific entry if editing
      savedData = [...data];
      savedData[editIndex] = {...input};
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add new entry if not editing
      savedData = [...data, input];
    }

    setData(savedData);

    try {
      localStorage.setItem("data", JSON.stringify(savedData));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }

    console.log(data);

    console.log(data.length);

    setInput({ date: "", income: "", remark: "" });
  };

  // Handle edit button click
  const handleEdit = (index) => {
    setInput({...data[index] }); // Prefill form with selected entry
    setIsEditing(true);
    setEditIndex(index); // Store the index of the entry being edited
  };

    // Handle delete button click
    const handleDelete = (index) => {
    const savedData = data.filter((_, i) => i !== index);
    setData(savedData);
    localStorage.setItem("data", JSON.stringify(savedData));
  };

  return (
    <div className="date-incomes-wrapper w-[100%] h-[auto] flex flex-col items-center gap-[20px]">
      <DateDay
        datum={data} 
        onEdit={handleEdit}
        onDelete={handleDelete} />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[25px] items-center justify-center bg-slate-700 w-[98%] h-[350px] rounded-md"
      >
        <p className="text-[16px] text-white">{message}</p>

        <div className="inputs-wrapper w-[100%] flex flex-wrap items-center justify-center gap-[15px]">
          <div className="date-wrapper flex flex-col items-center">
            <label htmlFor="date" className="text-[18px] text-white p-0 m-0">
              Enter Date
            </label>
            <input
              id="date"
              required
              name="date"
              value={input.date}
              type="date"
              className="text-[20px] h-[45px] w-[150px] rounded"
              onChange={handleChange}
            />
          </div>

          <div className="income-wrapper flex flex-col items-center">
            <label htmlFor="income" className="text-[18px] text-white p-0 m-0">
              Enter Income
            </label>
            <input
              id="income"
              required
              placeholder={`${0}`}
              name="income"
              value={input.income * 1}
              type="number"
              className="text-[20px] h-[45px] w-[150px] rounded"
              onChange={handleChange}
            />
          </div>

          <div className="remark-wrapper flex flex-col items-center">
            <label htmlFor="remark" className="text-[18px] text-white p-0 m-0">
              Enter Remark
            </label>
            <input
              id="remark"
              required
              name="remark"
              value={input.remark}
              type="text"
              className="text-[20px] h-[45px] w-[320px] flex justify-center rounded"
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="text-[22px] text-white font-bold w-[350px] h-[50px] bg-slate-950 rounded-[4px]">
          {isEditing ? 'Update' : 'Save'}
        </button>
      </form>
    </div>
  );
};
export default InputForm;
