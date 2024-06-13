import { Dropdown } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './listWork.module.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ListWork = ({works}) => {
    const navigate = useNavigate();

    const [selectedSortType, setSelectedSortType] = useState('% hoàn thành');
    const handleSelectedSortType = (eventKey) => setSelectedSortType(eventKey);

    const [selectedSortType1, setSelectedSortType1] = useState('Tuần');
    const handleSelectedSortType1 = (eventKey) => setSelectedSortType1(eventKey);

    const handleWorkClick  = (work) => {
        navigate(`/viewWorkGroup/${encodeURIComponent(work.title)}`);
    };

    return (
        <div>
            <div>
                <div className={styles.filter}>
                    <Dropdown onSelect={handleSelectedSortType1}>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            {selectedSortType1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item 
                                eventKey="Tuần" 
                                className={selectedSortType1 === "Tuần" ? styles.selectedItem : ''}
                            >
                                Tuần
                            </Dropdown.Item>
                            <Dropdown.Item 
                                eventKey="Tháng" 
                                className={selectedSortType1 === "Tháng" ? styles.selectedItem : ''}
                            >
                                Tháng
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown onSelect={handleSelectedSortType}>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            {selectedSortType}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item 
                                eventKey="% hoàn thành" 
                                className={selectedSortType1 === "% hoàn thành" ? styles.selectedItem : ''}
                            >
                                % hoàn thành
                            </Dropdown.Item>
                            <Dropdown.Item 
                                eventKey="Thời hạn kết thúc" 
                                className={selectedSortType === "Thời hạn kết thúc" ? styles.selectedItem : ''}
                            >
                                Thời hạn kết thúc
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
         
            </div>
            {works.map((work, index) => (
                <div key={index} className={styles.works} onClick={() => handleWorkClick(work)}>
                    <div className={styles.workContent}>
                        <div className={styles.workText}>
                            <button className={styles.workTitle}>
                            {work.title}
                            </button>
                            <p className={styles.workNote}>{work.note}</p>
                        </div>
                        <div className={styles.workProgress}>
                            <CircularProgressbar 
                                value={work.percent} 
                                text={`${work.percent}%`} 
                                styles={buildStyles({ textSize: '24px', pathColor: '#605DEC', textColor: '#fff', trailColor: '#ffffff', backgroundColor: '#EBEBF6'})}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListWork;