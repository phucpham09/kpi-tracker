import React from 'react';
import { Dropdown } from 'react-bootstrap';
import styles from './calendar.module.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      selectedDate: new Date(),
    };
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleYearSelect = this.handleYearSelect.bind(this);
  }

  componentDidMount() {
    const today = new Date();
    this.setState({
      selectedDate: today,
      currentDate: new Date(today.getFullYear(), today.getMonth(), 1)
    });
  }

  handleDayClick(day) {
    const { currentDate } = this.state;
    this.setState({
      selectedDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), day),
    });
  }

  handleYearSelect(eventKey) {
    const { currentDate } = this.state;
    this.setState({
      currentDate: new Date(parseInt(eventKey), currentDate.getMonth()),
    });
  }

  render() {
    const { currentDate, selectedDate } = this.state;
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const days = [];
  
    for (let i = 1; i <= daysInMonth + firstDayOfMonth; i++) {
      if (i > firstDayOfMonth) {
        days.push(i - firstDayOfMonth);
      } else {
        days.push('');
      }
    }
  
    const currentYear = currentDate.getFullYear();
    const years = [];
    for (let i = currentYear - 2; i <= currentYear + 2; i++) { 
      years.push(i);
    }
  
    return (
      <div className={styles.calendar}>

        <Dropdown className="w-100 text-center" onSelect={this.handleYearSelect}>
          <Dropdown.Toggle className={styles.selectYear}>
            {currentDate.getFullYear()}
          </Dropdown.Toggle>
          <Dropdown.Menu className={styles.menuYear}>
            {years.map((year) => (
              <Dropdown.Item key={year} eventKey={year}>
                {year}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        
        <div className={styles.month}>
          <button onClick={() => this.setState({ currentDate: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1) })}>
            &#8249;
          </button>
          <h6>{currentDate.toLocaleString('default', { month: 'long' })}</h6>
          <button onClick={() => this.setState({ currentDate: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1) })}>
            &#8250;
          </button>
        </div>

        <div className={styles.daysHeader} style={{ padding: '0'}}>
          <span>T2</span>
          <span>T3</span>
          <span>T4</span>
          <span>T5</span>
          <span>T6</span>
          <span>T7</span>
          <span>CN</span>
        </div>

        <div className={styles.daysContainer} style={{ padding: '0'}}>
          <div className={styles.days}>
            {days.map((day, index) => (
              <span
                key={index}
                className={`${styles.day} ${day === '' ? styles.empty : (selectedDate && day === selectedDate.getDate() ? styles.selected : '')}`}
                onClick={() => day && this.handleDayClick(day)}
              >
                {day}
              </span>
            ))}
          </div>
          
        </div>
      </div>
    );
  }
}

export default Calendar;
