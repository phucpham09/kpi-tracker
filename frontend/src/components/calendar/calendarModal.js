import React, { useState, useEffect } from 'react';
import styles from './calendar.module.css';
import { Icon } from '@iconify/react';

const CalendarModal = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const today = new Date();
    setSelectedDate(today);
    setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
  }, []);

  const handleDayClick = (day) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const handleYearSelect = (eventKey) => {
    setCurrentDate(new Date(parseInt(eventKey), currentDate.getMonth()));
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const days = [];

  for (let i = 1; i <= daysInMonth + firstDayOfMonth; i++) {
    if (i > firstDayOfMonth) {
      days.push(i - firstDayOfMonth);
    } else {
      days.push('');
    }
  }

  const currentYear = currentDate.getFullYear();
  const years = [];
  for (let i = currentYear - 2; i <= currentYear + 2; i++) {
    years.push(i);
  }

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleSubmit = () => {
    if (onDateSelect && selectedDate) {
      onDateSelect(selectedDate);
    }
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const formatDate = (date) => {
    const weekday = date.getDay() === 0 ? 'Chủ nhật' : `Thứ ${date.getDay() + 1}`;
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${weekday}, ${day} tháng ${month} ${year}`;
  };

  return (
    <>
      <button onClick={toggleModal} className={styles.buttonClock}>
        <span>
          {selectedDate && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}>
                <Icon icon="tabler:calendar-time" style={{ fontSize: '20px', marginRight: '10px' }} /> 
                {formatDate(selectedDate)}
            </div>        
          )}
        </span>
      </button>
      {modalVisible && (
        <>
          <div>
            <div className={styles.backdrop} />
            <div className={styles.modal}>
              <div className={styles.selectedDate}>
                {selectedDate && (
                  <span>
                    <div style={{ fontSize: '15px', display: 'flex', justifyContent: 'right' }}>{selectedDate.getFullYear()}</div>
                    <div style={{ fontSize: '15px', display: 'flex', justifyContent: 'center', fontSize: '24px' }}>
                      {selectedDate.getDay() === 0 ? 'Chủ nhật' : `Thứ ${selectedDate.getDay() + 1}`}, {' '}
                      {selectedDate.getDate()} tháng {selectedDate.getMonth() + 1}
                    </div>
                  </span>
                )}
              </div>
              <div className={styles.month}>
                <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}>
                  &#8249;
                </button>
                <h6>{currentDate.toLocaleString('default', { month: 'long' })}</h6>
                <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}>
                  &#8250;
                </button>
              </div>
              <div className={styles.daysHeader}>
                <span>T2</span>
                <span>T3</span>
                <span>T4</span>
                <span>T5</span>
                <span>T6</span>
                <span>T7</span>
                <span>CN</span>
              </div>
              <div className={styles.daysContainer}>
                <div className={styles.days}>
                  {days.map((day, index) => (
                    <span
                      key={index}
                      className={`${styles.day} ${day === '' ? '' : (selectedDate && day === selectedDate.getDate() ? styles.selected1 : '')}`}
                      onClick={() => day && handleDayClick(day)}
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.buttons}>
                <button onClick={handleCancel} className={styles.button}>Hủy</button>
                <button onClick={handleSubmit} className={styles.button}>OK</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CalendarModal;
