import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './auth.module.css'

export const Signup = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPasswprd] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handleLogin = () => {
        console.log('Login success');
        navigate('/home');
    };

    return (
        <div className={styles.mainBackground}>
            <div className={styles.title}>Đăng ký</div>

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
                </div>

                <div>
                    <Form.Label>Nhập lại mật khẩu:</Form.Label>
                    <Form.Control 
                        placeholder="Password"
                        value={rePassword} 
                        onChange={(event) => setRePassword(event.target.value)} 
                        type='password'
                    />
                </div>
            </div>

            <Button className={styles.confirm} onClick={handleLogin}>Đăng ký</Button>
            <div className={styles.register} onClick={() => navigate('/login')}>đăng nhập</div>
        </div>
    );
};
