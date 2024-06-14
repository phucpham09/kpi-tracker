import { Container, Row, Col, Button, Form, Alert, Modal, Dropdown } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import globalStyles from '../../globalStyles.module.css'
import styles from './widget.module.css'
import Header from '../../components/layout/header/header1';
import ActivityChart from '../../components/activityChart/activityChart';
import TodayWork from '../../components/todayWork/todayWork';
import ListWork from '../../components/listWork/listWork';

export const Widget = () => {
    const navigate = useNavigate();
    const [alert, setAlert] = useState(false);
    const [showActivityChart, setShowActivityChart] = useState(true);
    const [showTodayWork, setShowTodayWork] = useState(true);
    const [showListWork, setShowListWork] = useState(true);

    useEffect(() => {
        const widget1 = JSON.parse(localStorage.getItem('widget1'));
        const widget2 = JSON.parse(localStorage.getItem('widget2'));
        const widget3 = JSON.parse(localStorage.getItem('widget3'));

        if (widget1 !== null) setShowActivityChart(widget1);
        if (widget2 !== null) setShowTodayWork(widget2);
        if (widget3 !== null) setShowListWork(widget3);
    }, []);

    const [works] = useState([
        { title: 'Học từ vựng mới', note: 'Học 10 từ vựng mới mỗi ngày.', percent: 30 }
    ]);

    const handleSelectActivityChart = () => {
        const newValue = !showActivityChart;
        setShowActivityChart(newValue);
        localStorage.setItem('widget1', JSON.stringify(newValue));
    };

    const handleSelectTodayWork = () => {
        const newValue = !showTodayWork;
        setShowTodayWork(newValue);
        localStorage.setItem('widget2', JSON.stringify(newValue));
    };

    const handleSelectListWork = () => {
        const newValue = !showListWork;
        setShowListWork(newValue);
        localStorage.setItem('widget3', JSON.stringify(newValue));
    };

    const saveChange = () => {
        console.log('Saved');
        navigate('/home');
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    };

    return (
        <div>
            <Header text="Widget" />
            <div className={globalStyles.mainBackground} style={{ bottom: '10px' }}>
                <div style={{display: 'flex', alignItems: 'center', gap: '20px', margin: '10px'}} >
                    <input 
                        type="checkbox"
                        checked={showActivityChart} 
                        onChange={handleSelectActivityChart}
                        className={styles.checkBox}
                    />
                    <div style={{ fontWeight: '600' }}>Biểu đồ công việc</div>
                </div>
                <div className={styles.Item}>
                    <div style={{transform: 'scale(0.7)'}}><ActivityChart/></div>
                </div>
                <hr/>
                <div style={{display: 'flex', alignItems: 'center', gap: '20px', margin: '10px'}} >
                    <input 
                        type="checkbox"
                        checked={showTodayWork} 
                        onChange={handleSelectTodayWork}
                        className={styles.checkBox}
                    />
                    <div style={{ fontWeight: '600' }}>KPI hôm nay</div>
                </div>   
                <div className={styles.Item}>
                    <div style={{transform: 'scale(0.7)'}}><TodayWork/></div>
                </div>
                <hr/> 
                <div style={{display: 'flex', alignItems: 'center', gap: '20px', margin: '10px'}} >
                    <input 
                        type="checkbox"
                        checked={showListWork} 
                        onChange={handleSelectListWork}
                        className={styles.checkBox}
                    />
                    <div style={{ fontWeight: '600' }}>KPI nhóm công việc</div>
                </div>   
                <div className={styles.Item}>
                    <div style={{transform: 'scale(0.7)'}}><ListWork works={works}/></div> 
                </div> 
                <Button className={styles.button} onClick={saveChange}>Lưu thay đổi</Button>
            </div>
            {alert && (
                <Alert variant="success" dismissible className={globalStyles.Notification}>
                    Lưu thành công!
                </Alert>
            )}
        </div>
    );
};
