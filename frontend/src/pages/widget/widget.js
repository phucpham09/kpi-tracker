import { Container, Row, Col, Button, Form, Alert, Modal, Dropdown } from 'react-bootstrap';
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import globalStyles from '../../globalStyles.module.css'
import styles from './widget.module.css'
import Header from '../../components/layout/header/header1';
import ActivityChart from '../../components/activityChart/activityChart';
import TodayWork from '../../components/todayWork/todayWork';
import ListWork from '../../components/listWork/listWork';

export const Widget = () => {

    const [works] = useState([
        { title: 'Học từ vựng mới', note: 'Học 10 từ vựng mới mỗi ngày.', percent: 30 }
    ]);


    return (
        <div>
            <Header text="Widget" />
            <div className={globalStyles.mainBackground} style={{ bottom: '10px' }}>
                <ActivityChart/>
                <TodayWork/>
                <ListWork works={works}/>
            </div>
        </div>
    );
};
