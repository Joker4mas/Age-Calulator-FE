import { useState } from "react";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

function App() {
  const [days, setDay] = useState("");
  const [months, setMonth] = useState("");
  const [years, setYear] = useState("");

  const daysDiff = differenceInDays(
    new Date(years, months, 31), 
    new Date(years, months,days));

  const diffInMonths = differenceInMonths(
    new Date(years, 12, 31),
    new Date(years, months, days)
  );

  const diffInYears = differenceInYears(
    new Date(2024, 12, 31),
    new Date(years, months,days)
  );

  return (
    <>
      <div className="flex flex-col justify-center items-center my-12">
        <div
          style={{ borderBottomRightRadius: 100 }}
          className="   bg-white  rounded-2xl text-center items-center p-8"
        >
          <h1 className="text-3xl font-bold">Age Calculator</h1>

          <form id="form">
            <div className="container sm:w-36 lg:w-44  flex flex-row gap-4 lg:gap-12 justify-center my-8 mx-auto">
              <div className="flex flex-col gap-2 items-start">
                {" "}
                <label htmlFor="number" className={`${days > 31 && "text-rose-600",'font-bold'}`}>DAY</label>
                <input
                  type="number"
                  id="day"
                  name="number"
                  placeholder="DD"
                  min="1"
                  max="31"
                  className="sm:w-14 md:w-28 p-2 text-3xl font-bold rounded-md border-solid border-2 border-slate-400"
                  value={days}
                  onChange={(e) => setDay(e.target.value)}
                />
                {days > 31 && (<small className="text-rose-600">Must be a valid day</small>)}
              </div>

              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="month" className={`${months > 12 && 'text-rose-600','font-bold'}`}>MONTH</label>
                <input
                  type="number"
                  name="month"
                  placeholder="MM"
                  min="1"
                  max="12"
                  className="sm:w-14 lg:w-28 text-3xl p-2 font-bold  rounded-md border-solid border-2 border-slate-400"
                  value={months}
                  onChange={(e) => setMonth(e.target.value)}
                />
                {months > 12 && (<small className="text-rose-600">Must be a valid Month</small>)}

              </div>

              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="year" className={`${years > 2050 && 'text-rose-600','font-bold'}`}>YEAR</label>
                <input
                  type="Year"
                  name="number"
                  id="year"
                  placeholder="YYYY"
                  className=" w-28 text-3xl p-2 font-bold rounded-md  border-solid border-2 border-slate-400"
                  value={years}
                  onChange={(e) => setYear(e.target.value)}
                />
                {years > 2050 && (<small className="text-rose-600">Must be a valid Year</small>)}
              </div>
            </div>
            <div className="relative items-center text-center px-4">
              <hr className="border-solid border-1 border-slate-300 my-8" />
              <button
                type="submit"
                className="absolute p-2 -top-7 right-0 rounded-full sm:text-center   bg-purple-600 text-center"
              >
                <img src="/src/assets/icon-arrow.svg" alt="" />
              </button>
            </div>
          </form>

          {/* The logics displays here  */}
          <div className="flex flex-col justify-center items-start text-center ">
            <div className="flex flex-row gap-6 font-bold italic">
              <span className="font-bold text-8xl text-purple-500">
                {diffInYears}
              </span>{" "}
              <span className="font-bold text-8xl">Years</span>
            </div>

            <div className="flex flex-row gap-6 italic">
              <span className="font-bold text-8xl text-purple-500">
                {diffInMonths}
              </span>
              <span className="font-bold text-8xl ">Months</span>
            </div>

            <div className="flex flex-inline gap-6 italic">
              <span className="font-bold text-8xl text-purple-500">
                {daysDiff}
              </span>
              <span className="font-bold text-8xl">Days</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
