import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'

import Button from '@mui/material/Button';
import { fakeUserData } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import DisplayUsers from './DisplayUsers'

const UserDetails = () => {

    const dispatch = useDispatch();

    const addNewUser = (name) => {
        console.log(name);
        dispatch(addUser(name));
    };

  return (
    <>
    
    <div className="content">
        <div className="admin-table">
            <div className="admin-subtitle">
                List of User Details
            </div>
            <Button variant="outlined" onClick={() => addNewUser(fakeUserData())}>Add New User</Button>
        </div>
        <ul>
            <DisplayUsers/>
        </ul>
        <hr />
        <DeleteAllUsers/>
    </div>

    </>
  )
}

export default UserDetails