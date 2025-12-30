import {useState} from 'react';

const User = ({name}) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(2);
    return (
        <div className="user-card">
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <h2>Functional Name: {name}</h2>
            <h3>Lountocation: Noida</h3>
            <h4>Contact: @nitishbharti2</h4>
        </div>
    )
}

export default User;