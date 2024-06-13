import React from 'react';
import globalStyles from '../../globalStyles.module.css';
import styles from './help.module.css';
import Header from '../../components/layout/header/header1';
import { Icon } from '@iconify/react';

export const Help = () => {
    return (
        <div>
            <Header text="Trợ giúp" />
            <div className={globalStyles.mainBackground} style={{ bottom: '10px' }}>
            <div className={styles.directory}>Hướng dẫn ban đầu</div>
                <div className={styles.gridContainer}>
                    <div className={styles.help}>
                        <Icon className={styles.icon} icon="fluent:hat-graduation-12-regular" />
                        <div className={styles.title}>Bắt đầu với TaskManager</div>
                        <div className={styles.content}>Cùng khám phá các thông tin cơ bản của phần mền</div>
                    </div>
                    <div className={styles.help}>
                        <Icon className={styles.icon} icon="majesticons:exclamation-circle-line"/>
                        <div className={styles.title}>Quản lý thông tin cá nhân</div>
                        <div className={styles.content}>Đổi thông tin, mật khẩu, thiết lập hệ thống</div>
                    </div>
                    <div className={styles.help}>
                        <Icon className={styles.icon} icon="ph:bell"/>
                        <div className={styles.title}>Nhận thông báo công việc</div>
                        <div className={styles.content}>Kiểm tra tiến độ công việc và nhận thông báo nhắc nhở</div>
                    </div>
                </div>
                <div className={styles.directory}>Hướng dẫn tương tác với hệ thống</div>
                <div className={styles.gridContainer}>
                    <div className={styles.help}>
                        <Icon className={styles.icon} icon="material-symbols:checklist-rounded"/>
                        <div className={styles.title}>Điều khoản của chúng tôi</div>
                        <div className={styles.content}>Các điều khoản cá nhân, doanh nghiệp</div>
                    </div>
                    <div className={styles.help}>
                        <Icon className={styles.icon} icon="fluent:person-feedback-20-regular"/>
                        <div className={styles.title}>Phản hồi/ góp ý</div>
                        <div className={styles.content}>Hãy để chung tôi nâng cấp trải nghiệm của bạn</div>
                    </div>
                    <div className={styles.help}>
                        <Icon className={styles.icon} icon="material-symbols:book-2-outline"/>
                        <div className={styles.title}>Tạo công việc mới</div>
                        <div className={styles.content}>Xây dựng kế hoạch các công việc hằng ngày</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
