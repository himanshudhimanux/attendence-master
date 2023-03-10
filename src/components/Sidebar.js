import React from 'react';
import styles from './sidebar.module.css'
import { Accordion, Button, Stack } from 'react-bootstrap';
import { FaChartPie, FaUsers, FaUserCheck, FaFileAlt, FaCog, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>

            <Stack className='sidemenu' gap={1}>

                <Accordion defaultActiveKey="0" alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <h4 className={styles.SidemenuHeader} >HD Tech</h4>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Button variant='outline-success' className={styles.AddnewBusiness}><FaPlus />&ensp;Add New Business</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                    <Link to="/" className='side-item'>
                        <FaChartPie className='sidemenu-icon' />&emsp;Dashboard
                    </Link>
                    <Link to="/staff" className='side-item'>
                        <FaUsers className='sidemenu-icon' />&emsp;Staff
                    </Link>
                    <Link to="/attendence" className='side-item'>
                        <FaUserCheck className='sidemenu-icon' />&emsp;Attendence
                    </Link>
                    <Link to="/all-reports" className='side-item'>
                        <FaFileAlt className='sidemenu-icon' />&emsp;All Reports
                    </Link>
                    <Link to="/settings" className='side-item'>
                        <FaCog className='sidemenu-icon' />&emsp;Settings
                    </Link>
            </Stack>

        </>
    )
}

export default Sidebar