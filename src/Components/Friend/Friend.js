import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,username,id} = friend;
    const navigate = useNavigate();
    const showButtonId = () =>{
        // const path = '/friend/'+id;

        // const path = `/friend/${id}`;
        // navigate(path);

        navigate('/friend/'+id)
    }
    return (
        <div>
            <h2>{name}</h2>
            <Link to={'/friend/'+id}>Show details</Link>
            <button onClick={showButtonId}>{username} id: {id}</button>
        </div>
    );
};

export default Friend;