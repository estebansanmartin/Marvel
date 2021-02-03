import { Paper } from '@material-ui/core'
import React from 'react'
import CharacterItem from './CharacterItem'

function Character({items, isLoading}) {
    return isLoading ? <h2>Caricando</h2> :
    <Paper elevation={0} className="content">
        {
            items.map(item=>(
                <CharacterItem key={item.id} item={item}>
                </CharacterItem>
            ))
        }
    </Paper>
}

export default Character
