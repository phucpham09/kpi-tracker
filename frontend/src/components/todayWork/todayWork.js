import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './todayWork.css';

const TodayWork = () => {
  const percentage = 45;

  return (
    <div className="today-work">
      <div className="today-work-progress">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: '24px',
            pathColor: '#605DEC',
            textColor: '#605DEC',
            trailColor: '#d6d6d6',
            backgroundColor: '#EBEBF6',
          })}
        />
      </div>
      <div className="today-work-details">
        <h5>Việc hôm nay</h5>
        <div className="today-work-status">
          <div>
            <span className="status-dot completed"></span>Đã hoàn thành
          </div>
          <div>
            <span className="status-dot not-completed"></span>Chưa hoàn thành
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayWork;
