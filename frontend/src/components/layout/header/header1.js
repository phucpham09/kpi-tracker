import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const Header = ({ text }) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className={styles.header}>
            <FontAwesomeIcon className={styles.bellIcon} icon={faArrowLeft} onClick={goBack} />
            <div className={styles.text}>{text}</div>
            <div className={styles.bellIconContainer} onClick={() => navigate('/home')}>
                <FontAwesomeIcon className={styles.bellIcon} icon={faHome} />
            </div>
        </div>
    );
};

export default Header;
