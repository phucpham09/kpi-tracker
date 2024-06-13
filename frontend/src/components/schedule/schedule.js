import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './schedule.module.css';

const Schedule = ({ scheduleItem }) => {
  const navigate = useNavigate();
  
  const handleViewWork = (selectedItem) => {
    localStorage.setItem('scheduleData', JSON.stringify(selectedItem));
    navigate('/viewWork');
  };

  return (
    <div className={styles.schedule}>
      {scheduleItem.map((item, index) => (
        <button key={index} className={styles.button} onClick={() => handleViewWork(item)}>
          <div className={styles['schedule-item']}>
            <div className={styles['time-column']}>
              <div className={styles['time-start']}>{item.startTime}</div>
              <div className={styles.arrow}>↓</div>
              <div className={styles['time-end']}>{item.endTime}</div>
            </div>
            <div className={styles['details-column']}>
              <div className={styles.subject}>{item.title}</div>
              <div style={{ flexGrow: '1' }}></div>
              <div className={styles.content}>{item.note}</div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Schedule;
