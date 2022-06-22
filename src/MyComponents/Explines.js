import React from 'react'

export default function Explines(props) {
  return (
    <div>
        <p>Guess the sentence! Start typing</p>
        <p>The yellow blocks are meant for spaces</p>
        <h1>Score {props.score}</h1>
    </div>
  )
}
