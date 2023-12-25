import React from 'react'
import PropTypes from 'prop-types'

function User(props) {
  return (
    <div>
        <h2>{props.user.name}</h2>
        <h3>{props.user.id}</h3>
    </div>
  )
}

// User.propTypes = {
//     userName: PropTypes.string,
//     userId: PropTypes.number
// }
// User.defaultProps ={
//     userName: "Any Name",
//     userId: 0
// }
// User.propTypes ={
//     user: PropTypes.object
// }
User.propTypes ={
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }) 
}

export default User
