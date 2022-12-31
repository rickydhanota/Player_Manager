import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ManagerForm = (props) => {

    const [message, setMessage] = useState("Loading...");
    useEffect(() => {
        axios.get("http://localhost:8000/api")
        .then(response => setMessage(response.data.message))
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
           <h2>This is a test, the message from the backend is: {message}</h2> 
        </div>
    );
};

export default ManagerForm;