import React from 'react'

function Feild({ name, email, index }) {
    return (
        <div>
            <div className='feilddatashow'>
                <div className='name'>
                    <h4>{name}</h4>
                </div>
                <div className="email">
                    <h4>{email}</h4>
                </div>
                <div className='removebtn'>
                    <button>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Feild
