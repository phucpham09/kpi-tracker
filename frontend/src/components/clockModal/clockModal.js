import React, { useState } from 'react';
import styles from './clockModal.module.css';
import { Icon } from '@iconify/react';

const ClockModal = ({ onTimeSelect }) => {
  const [hour, setHour] = useState(24);
  const [minute, setMinute] = useState(0);
  const [isHourSelection, setIsHourSelection] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isHourSelected, setIsHourSelected] = useState(false);

  const handleHourClick = (hour) => {
    setHour(hour);
    setIsHourSelected(true);
    setTimeout(() => {
      setIsHourSelection(false);
    }, 500);
  };

  const handleMinuteClick = (minute) => {
    setMinute(minute);
  };

  const handleSubmit = () => {
    const selectedTime = { hour, minute };
    onTimeSelect(selectedTime); 
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const getTransformForSelection = () => {
    if (isHourSelection) {
      const hourAngle = hour * 30;
      return `rotate(${hourAngle}deg)`;
    } else {
      const minuteAngle = minute * 6;
      return `rotate(${minuteAngle}deg)`;
    }
  };

  const getLengthForSelection = () => {
    if (isHourSelection) {
      return hour > 12 ? '100px' : '160px';
    } else {
      return '160px';
    }
  };

  const formatNumber = (number) => {
    if (number === 24) return '00';
    return number < 10 ? `0${number}` : number;
  };

  return (
    <>
      <button onClick={toggleModal} className={styles.buttonClock}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}>
          <Icon icon="mdi:clock-outline" style={{ fontSize: '20px', marginRight: '10px' }} />
          {`${formatNumber(hour)} : ${formatNumber(minute)}`}
        </div>
      </button>
      {modalVisible && (
        <>
          <div className={styles.backdrop} />
          <div className={styles.modal}>
            <div className={styles.timeDisplay}>
              <span className={styles.timePart} onClick={() => setIsHourSelection(true)}>{formatNumber(hour)}</span>
              :
              <span className={styles.timePart} onClick={() => setIsHourSelection(false)}>{formatNumber(minute)}</span>
            </div>
            <div className={styles.clockFace}>
              <div className={styles.hand} style={{ transform: getTransformForSelection(), height: getLengthForSelection() }} />
              {isHourSelection ? (
                <>
                  {[...Array(12).keys()].map((h) => (
                    <div
                      key={h}
                      className={`${styles.hour} ${hour === (h === 0 ? 12 : h) ? styles.selected : ''}`}
                      style={{
                        transform: `rotate(${((h + 9) * 30)}deg) translate(80px) rotate(-${((h + 9) * 30)}deg)`
                      }}
                      onClick={() => handleHourClick(h === 0 ? 12 : h)}
                    >
                      {h === 0 ? 12 : h}
                    </div>
                  ))}
                  {[...Array(12).keys()].map((h) => (
                    <div
                      key={h + 13}
                      className={`${styles.hour} ${hour === h + 13 ? styles.selected : ''}`}
                      style={{
                        transform: `rotate(${((h + 10) * 30)}deg) translate(50px) rotate(-${((h + 10) * 30)}deg)`,
                        fontSize: '10px'
                      }}
                      onClick={() => handleHourClick(h + 13)}
                    >
                      {h + 1 === 12 ? '00' : h + 13}
                    </div>
                  ))}
                </>
              ) : (
                [...Array(12).keys()].map((m) => (
                  <div
                    key={m * 5}
                    className={`${styles.minute} ${minute === m * 5 ? styles.selected : ''}`}
                    style={{
                      transform: `rotate(${(m * 30 + 270)}deg) translate(80px) rotate(-${(m * 30 + 270)}deg)`
                    }}
                    onClick={() => handleMinuteClick(m * 5)}
                  >
                    {m * 5}
                  </div>
                ))

              )}
            </div>
            <div className={styles.buttons}>
              <button onClick={handleCancel} className={styles.button}>Hủy</button>
              <button onClick={handleSubmit} className={styles.button}>OK</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ClockModal;
