import React, { useState } from "react";
import Scheduler, { SchedulerData, ViewTypes } from "react-big-scheduler";
import "react-big-scheduler/lib/css/style.css";
import moment from "moment";

const SchedulerComponent = () => {
  // Initialize scheduler data
  const schedulerData = new SchedulerData(moment().format("YYYY-MM-DD"), ViewTypes.Week);

  // Set resources (e.g., employees)
  schedulerData.setResources([
    { id: "employee1", name: "Employee 1" },
    { id: "employee2", name: "Employee 2" },
  ]);

  // Set events (e.g., availability slots)
  schedulerData.setEvents([
    {
      id: 1,
      start: moment().add(1, "days").format("YYYY-MM-DD HH:mm:ss"),
      end: moment().add(1, "days").add(2, "hours").format("YYYY-MM-DD HH:mm:ss"),
      resourceId: "employee1",
      title: "Available",
    },
    {
      id: 2,
      start: moment().add(2, "days").format("YYYY-MM-DD HH:mm:ss"),
      end: moment().add(2, "days").add(3, "hours").format("YYYY-MM-DD HH:mm:ss"),
      resourceId: "employee2",
      title: "Meeting",
    },
  ]);

  const [data, setData] = useState(schedulerData);

  // Handle event clicks
  const handleEventClick = (event) => {
    alert(`You clicked on event: ${event.title}`);
  };

  // Handle new availability slot creation
  const handleNewEvent = (schedulerData, slotId, slotName, start, end) => {
    const newEvent = {
      id: Math.random(),
      start,
      end,
      resourceId: slotId,
      title: "New Availability",
    };
    schedulerData.addEvent(newEvent);
    setData(schedulerData);
  };

  return (
    <div>
      <Scheduler
        schedulerData={data}
        onEventClick={handleEventClick}
        onSelectDate={(schedulerData, date) => {
          schedulerData.setDate(date);
          setData(schedulerData);
        }}
        newEvent={(schedulerData, slotId, slotName, start, end) =>
          handleNewEvent(schedulerData, slotId, slotName, start, end)
        }
      />
    </div>
  );
};

export default SchedulerComponent;
