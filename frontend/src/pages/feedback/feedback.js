import { Button, Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import globalStyles from '../../globalStyles.module.css'
import styles from './feedback.module.css'
import Header from '../../components/layout/header/header1';

export const Feedback = () => {
    const [feedBack, setFeedBack] = useState('');
    const [alertType, setAlertType] = useState(null);

    const handleSubmit = () => {
        if (feedBack.trim() === '') {
            setAlertType("danger");
            return;
        }
        setAlertType("success");
        setFeedBack('');
        setTimeout(() => {
            setAlertType(null);
        }, 2000);
    };

    return (
        <div>
            <Header text="Phản hồi" />
            <div className={globalStyles.mainBackground} style={{ bottom: '10px' }}>
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Vui lòng gửi phản hồi cho chúng tôi</p>
                <p>Chia sẻ tại đây</p>
                <textarea
                    className={styles.feedBack}
                    placeholder="Nhập chia sẻ"
                    value={feedBack}
                    onChange={(event) => setFeedBack(event.target.value)}
                />
                <Button className={styles.button} onClick={handleSubmit}>Gửi phản hồi</Button>
                {alertType && (
                    <Alert variant={alertType} onClose={() => setAlertType(null)} dismissible className={globalStyles.Notification}>
                        {alertType === "danger" ? "Hãy nhập nội dung phản hồi !" : "Phản hồi đã được gửi thành công !"}
                    </Alert>
                )}
            </div>
        </div>
    );
};
