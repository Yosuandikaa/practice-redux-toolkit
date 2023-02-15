import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../core/redux/slice/userSlice';

function ListUser() {
    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.user);
    console.log(userSelector);

    useEffect(() => {
        dispatch(getUser());
    }, []);
  return (
    <div className="">
        asdasdsad
    </div>
  )
}

export default ListUser
