import {Routes, Route} from 'react-router-dom';

//Components
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import NotFound from './NotFound';
import Dashboard from '../../pages/dashboard/Dashboard';

export default function RouterApp(){
    return(
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/auth/signin' element = {<Login />} />
            <Route path='/auth/signup' element = {<Register />} />
            <Route path='/dashboard' element = {<Dashboard />} />
            <Route path='/*' element = {<NotFound />} />
        </Routes>
    );
}