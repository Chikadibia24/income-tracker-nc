const HeaderInfo = () => {
  //const changeDate = (

  return (
    <nav className="w-[100%] py-[15px] px-[15px] flex flex-col items-center gap-1 shadow-lg sticky top-0 z-10 bg-slate-100">
      <div className="year-month-wrapper w-[100%] flex items-center justify-between">
        <h1 className="year flex items-baseline gap-1">
          <span className="text-[16px] font-[500]"> Year: </span>
          <span className="text-[19px] font-bold text-[#020617]">
            {new Date().getFullYear()}
          </span>
        </h1>
        <h1 className="month flex items-baseline gap-1">
          <span className="text-[16px] font-[500]"> Month: </span>
          <span className="text-[19px] font-bold text-[#020617]">
            {new Date().toLocaleString("default", { month: "long" })}
          </span>
        </h1>
      </div>

      <div className="incomes-wrapper w-[100%] flex items-center justify-between">
        <h2 className="flex items-baseline gap-1">
          <span className="text-[16px] font-[500]"> USD: </span>
          <span className="text-[19px] font-bold text-[teal]">{7200}</span>
        </h2>

        <h2 className="flex items-baseline gap-1">
          <span className="text-[16px] font-[500]">USD:</span>
          <span className="text-[19px] font-bold text-[teal]">{600}</span>
        </h2>
      </div>
      {/* <button onClick={changeDate}>Change Date</button> */}
    </nav>
  );
};
export default HeaderInfo;
