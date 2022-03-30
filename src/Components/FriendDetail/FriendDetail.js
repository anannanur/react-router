import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // let params = useParams();
    let {friendId} = useParams();
    const [friend,setFriend] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[friendId])
    return (
        <div>
            <h2>Detail of a bondhu : {friendId}</h2>
            <h3>Name : {friend.name}</h3>
            <h4>Username : {friend.username}</h4>
            <h5>Email : {friend.email}</h5>
            <h5>website : {friend.website}</h5>
            <h5>Company : {friend.company?.name}</h5>
            <p>address : {friend.address?.city}</p>
        </div>
    );
};

export default FriendDetail;