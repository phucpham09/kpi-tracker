import React from 'react';
import globalStyles from '../../globalStyles.module.css';
import styles from './calen.module.css';
import Header from '../../components/layout/header/header';
import Footer from '../../components/layout/footer/footer';
import MyCalendar from '../../components/calendar/calendar';
import 'react-circular-progressbar/dist/styles.css';
import Schedule from '../../components/schedule/schedule';
import scheduleData from '../../dataTest/calenData';

export const Calen = () => {

    return (
        <div>
            <Header text="Lịch" />
            <div className={globalStyles.mainBackground}>
                <MyCalendar />
                <hr />
                <Schedule scheduleItem={scheduleData} />
                <hr />
            </div>
            <Footer option="calendar" />
        </div>
    );
};
