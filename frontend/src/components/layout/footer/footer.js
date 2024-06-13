import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarDays, faPlus, faRankingStar, faGear, faListCheck} from '@fortawesome/free-solid-svg-icons';

export const Footer = ({ option }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.footer}>
            <button className={styles.option} onClick={() => navigate('/home')}>
                <FontAwesomeIcon className={`${styles.icon} ${option === 'home' ? styles.optionSelected : ''}`} icon={faHome} />
                <div className={`${styles.optionText} ${option === 'home' ? styles.optionSelected : ''}`}>Trang chủ</div>
            </button>
            <button className={styles.option} onClick={() => navigate('/workGroup')}>
                <FontAwesomeIcon className={`${styles.icon} ${option === 'work' ? styles.optionSelected : ''}`} icon={faListCheck} />
                <div className={`${styles.optionText} ${option === 'work' ? styles.optionSelected : ''}`}>Công việc</div>
            </button>
            <button className={styles.add} onClick={() => navigate('/addWork')}>
                <FontAwesomeIcon className={styles.iconAdd} icon={faPlus} />
            </button>
            <button className={styles.option} onClick={() => navigate('/calendar')}>
                <FontAwesomeIcon className={`${styles.icon} ${option === 'calendar' ? styles.optionSelected : ''}`} icon={faCalendarDays} />
                <div className={`${styles.optionText} ${option === 'calendar' ? styles.optionSelected : ''}`}>Lịch</div>
            </button>
            <button className={styles.option} onClick={() => navigate('/report')}>
                <FontAwesomeIcon className={`${styles.icon} ${option === 'report' ? styles.optionSelected : ''}`} icon={faRankingStar} />
                <div className={`${styles.optionText} ${option === 'report' ? styles.optionSelected : ''}`}>Thống kê</div>
            </button>
            {/* <button className={styles.option} onClick={() => navigate('/setting')}>
                <FontAwesomeIcon className={`${styles.icon} ${option === 'setting' ? styles.optionSelected : ''}`} icon={faGear} />
                <div className={`${styles.optionText} ${option === 'setting' ? styles.optionSelected : ''}`}>Cài đặt</div>
            </button> */}
        </div>
    );
};

export default Footer;