import { Link, Paper, Button } from '@material-ui/core'
import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'

function Footer() {
    return (
        <div>
           <Paper variant="outlined" elevation={0} className="footer">
           {new Date().getFullYear()} Sviluppato per <Link color="primary" href="https://estebansanmartin.it" target="_blank" rel="noreferrer">Esteban San Martin </Link>
           <Button className="social" target="_blank" href="https://github.com/estebansanmartin/Marvel.git">
            <GitHubIcon fontSize="medium" style={{color:'#7DBBE6'}} />
           </Button>
           </Paper> 
        </div>
    )
}

export default Footer
