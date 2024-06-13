import { Button, Form } from 'react-bootstrap';
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './auth.module.css'
import { Icon } from '@iconify/react';

export const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPasswprd] = useState('');

    const handleLogin = () => {
        console.log('Login success');
        navigate('/home');
    };

    return (
        <div className={styles.mainBackground}>
            <div className={styles.title}>Đăng nhập</div>

            <div className={styles.inputContainer}>
                <div>
                    <Form.Label>Tên đăng nhập:</Form.Label>
                    <Form.Control 
                        placeholder="User name"
                        value={userName} 
                        onChange={(event) => setUserName(event.target.value)} 
                        type='text'
                    />
                </div>
                
                <div>
                    <Form.Label>Mật khẩu:</Form.Label>
                    <Form.Control 
                        placeholder="Password"
                        value={password} 
                        onChange={(event) => setPasswprd(event.target.value)} 
                        type='password'
                    />
                    <div style={{ display: 'flex', justifyContent: 'right', padding: '10px' }}>Quên mật khẩu</div>
                </div>
                
            </div>

            <div className={styles.loginContainer}>
                <Button className={styles.confirm} onClick={handleLogin}>Đăng nhập</Button>
                <div className={styles.or}>Hoặc</div>
                <div className={styles.iconContainer}>
                    <div className={styles.logoIcon}><Icon icon="ant-design:google-circle-filled" style={{color: '#e11d48'}}/></div>
                    <div className={styles.logoIcon}><Icon icon="mdi:facebook" style={{color: '#4f46e5'}}/></div>
                    <div className={styles.logoIcon}><Icon icon="mage:tiktok-circle" style={{color: '#000000'}}/></div>
                </div>
            </div>

            <div className={styles.register} onClick={() => navigate('/register')}>đăng ký</div>
        </div>
    );
};
