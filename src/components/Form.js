import { InputBase, Paper } from '@material-ui/core'
import React, {useState} from 'react'


const Form = ({search}) => {
    const[text,setText] = useState('')

    const onSearch= (q)=>{
        setText(q)
        search(q)
    }

    return (
        <section className="search">
            <form>
            <Paper className="form">
            <InputBase 
                type="text" 
                className="input" 
                placeholder="Cerca il tuo personaggio preferito..." 
                autoFocus 
                onChange={(e)=>onSearch(e.target.value)}    
                value={text}
            />
            </Paper>
                {/* <input type="text"
                className="form-control"
                placeholder="Find a character"
                autoFocus
                onChange={(e)=>onSearch(e.target.value)}
                value={text}/> */}
            </form>
        </section>
    )
}

export default Form

/* import React, { useState } from 'react'
import '../App.sass'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

function Form(search) {
    const[text, setText] = useState('')

    const onSearch = (q)=>{
        setText(q)
        search(q)
    }

    return (
        <Paper component="form" className="form" >
            <InputBase 
                type="text" 
                className="input" 
                placeholder="Cerca il tuo personaggio preferito" 
                autoFocus 
                onChange={(e)=>onSearch(e.target.value)}    
                value={text}
            />
            <IconButton type="submit" className="iconButton" aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
};

export default Form;
 */