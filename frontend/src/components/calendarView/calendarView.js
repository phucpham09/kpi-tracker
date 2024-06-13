import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import './calendarView.css';

const days = [
  "28/9", "29/9", "30/9", "1/10", "2/10", "3/10", "4/10",
  "5/10", "6/10", "7/10", "8/10", "9/10", "10/10", "11/10",
  "12/10", "13/10", "14/10", "15/10", "16/10", "17/10", "18/10"
];

const tasks = [
  { name: "Deadline báo cáo", start: 0, end: 6, status: "completed" },
  { name: "Deadline", start: 7, end: 13, status: "ongoing" },
  { name: "Báo cáo", start: 0, end: 3, status: "overdue" },
  { name: "Deadline", start: 14, end: 20, status: "not-due" }
];

const getColorClass = (status) => {
  switch (status) {
    case 'completed':
      return 'task completed';
    case 'ongoing':
      return 'task ongoing';
    case 'overdue':
      return 'task overdue';
    case 'not-due':
      return 'task not-due';
    default:
      return 'task';
  }
};

const CalendarView = () => {
  return (
    <div className="calendar-container">
      <div className="header">Thứ 3 ngày 6 tháng 10 năm 2024</div>
      <div className="scroll-container">
        <ScrollMenu>
          {days.map((day, index) => (
            <div className="day-container" key={index}>
              <div className="day">{day}</div>
              <div className="day-label">
                {index % 7 === 0 && "CN"}
                {index % 7 === 1 && "T2"}
                {index % 7 === 2 && "T3"}
                {index % 7 === 3 && "T4"}
                {index % 7 === 4 && "T5"}
                {index % 7 === 5 && "T6"}
                {index % 7 === 6 && "T7"}
              </div>
              <div className="tasks">
                {tasks.filter(task => task.start <= index && task.end >= index).map((task, i) => (
                  <div className={getColorClass(task.status)} key={i}>{task.name}</div>
                ))}
              </div>
            </div>
          ))}
        </ScrollMenu>
      </div>
      <div className="legend">
        <div className="legend-item ongoing">Đang thực hiện</div>
        <div className="legend-item not-due">Chưa đến hạn</div>
        <div className="legend-item completed">Đã hoàn thành</div>
        <div className="legend-item overdue">Đã quá hạn</div>
      </div>
    </div>
  );
};

export default CalendarView;
