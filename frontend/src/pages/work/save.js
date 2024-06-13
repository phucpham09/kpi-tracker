import React, { useState, useEffect } from 'react';
import { Button, Alert, OverlayTrigger, Popover } from 'react-bootstrap';
import globalStyles from '../../globalStyles.module.css';
import styles from './work.module.css';
import Header from '../../components/layout/header/header';
import Footer from '../../components/layout/footer/footer';

export const ViewWork = () => {
  const storedWorkData = localStorage.getItem('scheduleData');
  const initialWorkData = storedWorkData ? JSON.parse(storedWorkData) : {};
  const [work, setWork] = useState(initialWorkData);
  const [alert, setAlert] = useState(false);

  const calculateKPI = (index) => {
    setWork(prevWork => {
      const updatedTasks = [...prevWork.tasks];
      const task = updatedTasks[index];
      const startDate = new Date(`${task.startDate}T${task.startTime}`);
      const endDate = new Date(`${task.endDate}T${task.endTime}`);
      const currentTime = new Date();
      const timeDiffStart = currentTime.getTime() - startDate.getTime();
      const timeDiffEnd = endDate.getTime() - startDate.getTime();
      const timeDiffStartPositive = Math.max(0, timeDiffStart);
      const percentage = Math.min(100, (timeDiffStartPositive / timeDiffEnd) * 100);
      updatedTasks[index].percentage = task.completed ? percentage.toFixed(2) : "0";
      updatedTasks[index].completedTime = task.completed ? currentTime : null;
      return { ...prevWork, tasks: updatedTasks };
    });
  };

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...work.tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setWork({ ...work, tasks: updatedTasks });
    calculateKPI(index);
  };

  const saveChange = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  const cancel = () => {
    setWork({
      title: '',
      note: '',
      startTime: '',
      startDate: '',
      endTime: '',
      endDate: '',
      tasks: []
    });
  };

  const calculateTimePosition = (time, minTime, maxTime) => {
    return ((time - minTime) / (maxTime - minTime)) * 100;
  };

  const renderPopover = (title, date, time) => (
    <Popover id={`popover-${title}`}>
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>
        <strong>Date:</strong> {date}<br />
        <strong>Time:</strong> {time}
      </Popover.Body>
    </Popover>
  );

  return (
    <div>
      <Header text="Chi tiết công việc" />
      <div className={globalStyles.mainBackground}>
        <div className={styles.mainContainer}>
          <div>
            <div style={{ fontWeight: 'bold' }}>Nội dung công việc</div>
            {work.tasks.map((task, index) => {
              const workStartTime = new Date(`${work.startDate}T${work.startTime}`).getTime();
              const workEndTime = new Date(`${work.endDate}T${work.endTime}`).getTime();
              const taskStartTime = new Date(`${task.startDate}T${task.startTime}`).getTime();
              const taskEndTime = new Date(`${task.endDate}T${task.endTime}`).getTime();
              const taskCompleteTime = task.completedTime ? new Date(task.completedTime).getTime() : null;

              const minTime = Math.min(workStartTime, taskStartTime, workEndTime, taskEndTime, taskCompleteTime);
              const maxTime = Math.max(workStartTime, taskStartTime, workEndTime, taskEndTime, taskCompleteTime);

              const startTaskPosition = calculateTimePosition(taskStartTime, minTime, maxTime);
              const endTaskPosition = calculateTimePosition(taskEndTime, minTime, maxTime);
              const completeTaskPosition = taskCompleteTime ? calculateTimePosition(taskCompleteTime, minTime, maxTime) : null;

              return (
                <div key={index} className={styles.taskContainer}>
                  <input 
                    type="checkbox"
                    checked={task.completed} 
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <div>{task.name}</div>
                  <div className={styles.pseudoSliderContainer} style={{ width: '50%', position: 'relative' }}>
                    <div className={styles.progressBackground} style={{ width: '100%' }} />
                    <div 
                      className={styles.progressFill} 
                      style={{ 
                        left: `${startTaskPosition}%`,
                        width: `${endTaskPosition - startTaskPosition}%`,
                        backgroundColor: 'lightgreen'  // Tô xanh task start và task end của thanh nhiệm vụ
                      }} 
                    />
                    <OverlayTrigger trigger="click" placement="top" overlay={renderPopover('Work Start', work.startDate, work.startTime)}>
                      <div className={styles.startTooltip} style={{ left: '0%' }} />
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" placement="top" overlay={renderPopover('Work End', work.endDate, work.endTime)}>
                      <div className={styles.endTooltip} style={{ left: '100%' }} />
                    </OverlayTrigger>
                    {task.completed && (
                      <>
                        <OverlayTrigger trigger="click" placement="top" overlay={renderPopover('Completion Time', new Date(task.completedTime).toLocaleDateString(), new Date(task.completedTime).toLocaleTimeString())}>
                          <div className={styles.completionMarker} style={{ left: `${completeTaskPosition}%`, transform: 'translateX(-50%)' }} />
                        </OverlayTrigger>
                       
                      </>
                    )}
                     <OverlayTrigger trigger="click" placement="top" overlay={renderPopover('Task Start', task.startDate, task.startTime)}>
                          <div className={styles.startTooltip} style={{ left: `${startTaskPosition}%` }} />
                        </OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="top" overlay={renderPopover('Task End', task.endDate, task.endTime)}>
                          <div className={styles.endTooltip} style={{ left: `${endTaskPosition}%` }} />
                        </OverlayTrigger>
                  </div>
                  <div className={styles.taskPercentage}>
                    {parseFloat(task.percentage) ?? 0}%
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.flexRow}>
            <Button className={styles.button} onClick={saveChange}>Lưu</Button>
            <Button className={styles.button} onClick={cancel} variant="danger">Hủy bỏ</Button>
          </div>
        </div>
        {alert && (
          <Alert variant="success" dismissible className={globalStyles.Notification}>
            Lưu thành công!
          </Alert>
        )}
      </div>
      <Footer />
    </div>
  );
};
