import React from 'react'

const Card = ({id, name, email}) => {
    return (
        <div className="tc bg-light-green dib ma2 pa3 grow shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?200x200`}></img>
            <div className="tc">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card