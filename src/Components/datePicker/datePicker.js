import React, { useState, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ColumnChart from "../charts/ColumnChart/ColumnChart";
import { chartOptions } from "../../Utilites/chartOptions";
import SearchSchduleDateTime from "../../Utilites/SearchScheduleDateTime";
import findTimings from "../../Utilites/findTimings";

export default function TableDatePicker() {
  const [date, setDate] = useState(new Date());
  const [options, setOptions] = useState({});
  const [scheduleDateTime, setScheduleDateTime] = useState([]);
  const [scheduleDatesPerItemDate, setscheduleDatesPerItemDate] = useState([]);
  const [perDate, setPerDate] = useState("");
  useEffect(() => {
    const dateString = moment(date).format("YYYY-MM-DD");
    const [result, scheduleTime] = SearchSchduleDateTime(dateString);
    setScheduleDateTime(scheduleTime);
    setscheduleDatesPerItemDate(result[0]);
    // findTimings("2021-12-24", scheduleTime);
    setOptions(chartOptions(result, dateString));
    // console.log("====>", result);
  }, [date]);
  useEffect(() => {
    findTimings("2021-12-24", scheduleDateTime);
    // console.log("====>", result);
  }, [perDate, scheduleDateTime]);

  return (
    <>
      <DatePicker selected={date} onChange={(date) => setDate(date)} />
      <ColumnChart options={options} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="perDate">
          Select Date
          <select
            id="perDate"
            value={perDate}
            onChange={(e) => setPerDate(e.target.value)}
          >
            <option />
            {scheduleDatesPerItemDate.map((perDate) => (
              <option value={perDate} key={perDate}>
                {perDate}
              </option>
            ))}
          </select>
        </label>
      </form>
    </>
  );
}
