import React from 'react'
import { useDispatch } from 'react-redux'

import { startEditingSmurf } from '../store/actions'


export default function Smurf(props) {
    const dispatch = useDispatch()

    const setEditingState = () => { dispatch(startEditingSmurf(props.id)) }

    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>

            <button onClick={setEditingState}>Edit</button>
        </div>
    )
}