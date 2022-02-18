import react from "react";


const MyDot = ({ isActive }) => (
    <span
        style={{
            display: 'inline-block',
            height: isActive ? '8px' : '5px',
            width: isActive ? '8px' : '5px',
            background: '#1890ff'
        }}
    ></span>
)

export default MyDot