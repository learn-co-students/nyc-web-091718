import React from 'react'
import {connect} from 'react-redux'

const Player = (props) => {
  return (
    <div onClick={() => props.cookie(props.player)}>
      <p>{props.player.name}</p>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  console.log('dispatch', dispatch)
  return {
    cookie: (something) => dispatch({ //something is really a player
      type: "CHOOSE_PLAYER",
      payload: something
    })
  }
}

export default connect(null, mapDispatchToProps)(Player)
