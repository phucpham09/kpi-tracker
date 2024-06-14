import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Start } from './pages/start/start';
import { Login } from './pages/auth/login';
import { Signup } from './pages/auth/signup';
import { Home } from './pages/home/home';
import { Widget } from './pages/widget/widget';
import { Calen } from './pages/calen/calen';
import { WorkGroup } from './pages/workGroup/workGroup';
import { ViewWorkGroup } from './pages/workGroup/viewWorkGroup';
import { AddWork } from './pages/work/addWork';
import { ViewWork } from './pages/work/viewWork';
import { Report } from './pages/report/report';
import { Setting } from './pages/setting/setting';
import { Notify } from './pages/notify/notify';
import { ChangePassword } from './pages/changePassword/changePassword';
import { Feedback } from './pages/feedback/feedback';
import { Help } from './pages/help/help';

export const App = () => {
    return (
        <HashRouter>    
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/widget" element={<Widget/>} />
                <Route path="/calendar" element={<Calen/>} />
                <Route path="/workGroup" element={<WorkGroup/>} />
                <Route path="/viewWorkGroup/:groupName" element={<ViewWorkGroup/>} />
                <Route path="/addWork" element={<AddWork/>} />
                <Route path="/viewWork" element={<ViewWork/>} />
                <Route path="/report" element={<Report/>} />
                <Route path="/setting" element={<Setting/>} />
                <Route path="/notify" element={<Notify/>} />
                <Route path="/change-password" element={<ChangePassword/>} />
                <Route path="/feedback" element={<Feedback/>} />
                <Route path="/help" element={<Help/>} />
            </Routes>
        </HashRouter>
    );
};

