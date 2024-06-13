import React, { useState } from 'react';
import globalStyles from '../../globalStyles.module.css'
import styles from './notify.module.css'
import Header from '../../components/layout/header/header1';
import Schedule from '../../components/schedule/schedule';

export const Notify = () => {
    const [activeTab, setActiveTab] = useState('upcoming');

    const scheduleData = [
        {
            startTime: '06:45',
            endTime: '08:15',
            title: 'Pháp luật đại cương - EM1170',
            note: 'Sáng thứ 3, tiết 1 - 3, D9-406'
        },
        {
            startTime: '08:25',
            endTime: '11:45',
            title: 'Kỹ thuật phần mềm',
            note: 'Sáng thứ 3, tiết 3 - 4, D9-406',
        },
        {
            startTime: '14:25',
            endTime: '11:45',
            title: '147743 - Pháp luật đại cương - EM1170',
            note: 'Sáng thứ 3, tiết 3 - 5, D9-406',
        },
        {
            startTime: '14:25',
            endTime: '11:45',
            title: '147743 - Pháp luật đại pháp - EM1177',
            note: 'Sáng thứ 3, tiết 5 - 7, D9-406',
          },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'upcoming':
            return <div>  
                    <div style={{ fontWeight: 'bold' }}>Còn 4 tiếng nữa</div>
                    <Schedule scheduleItem={[scheduleData[0]]} />
                    <div style={{ fontWeight: 'bold' }}>Còn 7 tiếng nữa</div>
                    <Schedule scheduleItem={[scheduleData[1]]} />
                </div>
            case 'passed':
            return <div>  
                    <div style={{ fontWeight: 'bold' }}>Quá hạn 3 tiếng</div>
                    <Schedule scheduleItem={[scheduleData[0]]} />
                    <div style={{ fontWeight: 'bold' }}>Quán hạn 4 tiếng</div>
                    <Schedule scheduleItem={[scheduleData[0]]} />
                </div>
        }
    }

    return (
        <div>
             <Header text="Thông báo" />
            <div className={globalStyles.tabContainer}>
                <div className={globalStyles['tab-nav']}>
                    <div className={`${globalStyles['tab-link']} ${activeTab === 'upcoming' ? globalStyles['active'] : ''}`}
                        onClick={() => setActiveTab('upcoming')}>
                        Sắp tới
                    </div>
                    <div className={`${globalStyles['tab-link']} ${activeTab === 'passed' ? globalStyles['active'] : ''}`}
                        onClick={() => setActiveTab('passed')}>
                        Đã qua
                    </div>
                </div>
            </div>
            <div className ={globalStyles.mainBackground} style={{top:'155px', bottom: '10px'}}> 
                {renderContent()}
            </div>
        </div>
    );
};
    
