import React, { useState, useEffect } from "react";
import AppointmentForm from "./AppointmentForm";
import Scheduler from "devextreme-react/scheduler";
const views = ["month", "day"];

const xdata = [
  {
    id: 0,
    startDate: new Date("2021-07-01T15:00"),
    endDate: new Date("2021-07-01T16:30"),
    text: "Manditjyoti Borah2",
    patient: "Manditjyoti Borah",
    date: new Date("2021-07-01"),
    doctor: "Mr. Manditjyoti Borah",
    notes: "Okay",
    status: "pending"
  },
  {
    id: 1,
    startDate: new Date("2021-07-01T15:00"),
    endDate: new Date("2021-07-01T16:30"),
    text: "Manditjyoti Borah2",
    patient: "Manditjyoti Borah",
    date: new Date("2021-07-01"),
    doctor: "Mr. Manditjyoti Borah",
    notes: "Okay",
    status: "pending"
  },
  {
    id: 2,
    startDate: new Date("2021-07-01T13:00"),
    endDate: new Date("2021-07-01T14:30"),
    text: "Manditjyoti Borah4",
    patient: "Manditjyoti Borah",
    date: new Date("2021-07-01"),
    doctor: "Mr. Manditjyoti Borah",
    notes: "Okay",
    status: "pending"
  },
  {
    id: 3,
    startDate: new Date("2021-07-01T14:00"),
    endDate: new Date("2021-07-01T15:30"),
    text: "Manditjyoti Borah3",
    patient: "Manditjyoti Borah",
    date: new Date("2021-07-01"),
    doctor: "Mr. Manditjyoti Borah",
    notes: "Okay",
    status: "pending"
  },
  {
    id: 4,
    startDate: new Date("2021-07-02T15:00"),
    endDate: new Date("2021-07-02T16:30"),
    text: "Manditjyoti Borah2",
    patient: "Manditjyoti Borah",
    date: new Date("2021-07-01"),
    doctor: "Mr. Manditjyoti Borah",
    notes: "Okay",
    status: "pending"
  },
  {
    id: 5,
    startDate: new Date("2021-07-01T15:00"),
    endDate: new Date("2021-07-01T16:30"),
    text: "Manditjyoti Borah1",
    patient: "Manditjyoti Borah",
    date: new Date("2021-07-01"),
    doctor: "Mr. Manditjyoti Borah",
    notes: "Okay",
    status: "pending"
  }
];

function App() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    setData(xdata);
  }, []);

  function onAppointmentFormOpening(e) {
    e.cancel = true;
    setDatas(e.appointmentData);
    setOpen(true);
  }
  function changeHandler(value) {
    setDatas({
      ...datas,
      ...value
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    setData([...data, datas]);
    handler();
  }
  console.log(data);

  function handler() {
    setOpen(!open);
  }
  return (
    <React.Fragment>
      <AppointmentForm
        open={open}
        handleClose={handler}
        onChange={changeHandler}
        data={datas}
        onSubmit={submitHandler}
      />
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        views={views}
        defaultCurrentView="month"
        height={600}
        onAppointmentFormOpening={onAppointmentFormOpening}
      ></Scheduler>
    </React.Fragment>
  );
}

export default App;
