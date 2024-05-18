import { useState } from "react";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";
// import Icons from './assets/icon-arrow.svg'
import Footer from './components/footer.jsx'

// import {Arrow} from './assets/icon-arrow.sv'
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
      <div className="flex flex-col justify-center items-center my-4">
        <div
          style={{ borderBottomRightRadius: 100 }}
          className=" w-half bg-white  rounded-2xl text-center p-4 items-center lg:p-8"
        >
          <h1 className="hidden md:text-3xl font-bold">Age Calculator</h1>

          <form id="form">
            <div className="container  flex flex-row gap-8 md:gap-4 lg:gap-12 justify-center my-8 mx-auto">
              <div className="flex flex-col gap-1 items-start">
                {" "}
                <label htmlFor="number" className={`${days > 31 && "text-rose-600",'font-bold'}`}>DAY</label>
                <input
                  type="number"
                  id="day"
                  name="number"
                  placeholder="DD"
                  min="1"
                  max="31"
                  className="w-16 lg:w-28 p-2  sm:text-xl md:text-3xl font-bold rounded-md border-solid border-2 border-slate-400"
                  value={days}
                  onChange={(e) => setDay(e.target.value)}
                />
                {days > 31 && (<small className="block text-rose-600">Invalid days</small>)}
              </div>

              <div className="flex flex-col gap-1 items-start">
                <label htmlFor="month" className={`${months > 12 && 'text-rose-600','font-bold'}`}>MONTH</label>
                <input
                  type="number"
                  name="month"
                  placeholder="MM"
                  min="1"
                  max="12"
                  className="w-16 lg:w-28 sm:text-xl md:text-3xl p-2 font-bold  rounded-md border-solid border-2 border-slate-400"
                  value={months}
                  onChange={(e) => setMonth(e.target.value)}
                />
                {months > 12 && (<small className="text-rose-600">Invalid Month</small>)}

              </div>

              <div className="flex flex-col gap-1 items-start">
                <label htmlFor="year" className={`${years > 2050 && 'text-rose-600','font-bold'}`}>YEAR</label>
                <input
                  type="Year"
                  name="number"
                  id="year"
                  placeholder="YYYY"
                  className="w-16 lg:w-28 lg:text-3xl p-2 font-bold rounded-md  border-solid border-2 border-slate-400"
                  value={years}
                  onChange={(e) => setYear(e.target.value)}
                />
                {years > 2050 && (<small className="text-rose-600">Invalid Year</small>)}
              </div>
            </div>
            <div className="block lg:relative items-center text-center px-4 py-1  ">

                <div className="text-center mx-auto">
              <hr className="w-72 lg:w-96 border-solid border-1 border-slate-300 my-8 lg:ml-24" />
                </div>            
                <button
                type="submit"
                className=" -mt-16 md:mt-0 min-w-16 md:min-h-16  md:absolute p-2 md:center  md:top-2 md:right-0 rounded-full text-center   bg-purple-600 md:mr-16"
              >
    
                <img src="./src/assets/icon-arrow.svg" alt="" />
              </button>
            </div>
          </form>

          {/* The logics displays here  */}
          <div className="flex flex-col justify-center md:ml-4 mb-4 items-start text-center ">
            <div className="flex flex-row gap-6 font-bold italic">
              <span className="font-bold text-7xl lg:text-8xl text-purple-500">
                {diffInYears}
              </span>{" "}
              <span className="font-bold text-7xl lg:text-8xl">Years</span>
            </div>

            <div className="flex flex-row gap-6 italic">
              <span className="font-bold text-7xl lg:text-8xl text-purple-500">
                {diffInMonths}
              </span>
              <span className="font-bold text-7xl lg:text-8xl ">Months</span>
            </div>

            <div className="flex flex-inline gap-6 italic">
              <span className="font-bold text-7xl lg:text-8xl text-purple-500">
                {daysDiff}
              </span>
              <span className="font-bold text-7xl lg:text-8xl">Days</span>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    </>
  );
}

export default App;
