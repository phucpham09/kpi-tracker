import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import globalStyles from '../../globalStyles.module.css'
import styles from './home.module.css'
import Header from '../../components/layout/header/header';
import Footer from '../../components/layout/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import ActivityChart from '../../components/activityChart/activityChart';
import TodayWork from '../../components/todayWork/todayWork';
import ListWork from '../../components/listWork/listWork';

export const Home = () => {
    const navigate = useNavigate();

    const [works] = useState([
        { title: 'Học từ vựng mới', note: 'Học 10 từ vựng mới mỗi ngày.', percent: 30 },
        { title: 'Luyện nghe', note: 'Nghe 30 phút podcast tiếng Việt mỗi ngày.', percent: 50 },
        { title: 'Luyện nói', note: 'Nói chuyện với người bản xứ 15 phút mỗi ngày.', percent: 20 }
    ]);

    return (
        <div>
            <Header text="Trang chủ" />
            <div className ={globalStyles.mainBackground}>
                <div className ={styles.edit}  onClick={() => navigate('/widget')} >
                    Chỉnh sửa <FontAwesomeIcon className={styles.iconAdd} icon={faEdit} />
                </div>
                <div style={{ marginTop: '15px'}}><ActivityChart /></div>
                <div style={{ marginTop: '15px'}}><TodayWork /></div>
                <hr/>
                <div><ListWork works={works}/></div>
            </div>
            <Footer option="home" />
        </div>
    );
};
