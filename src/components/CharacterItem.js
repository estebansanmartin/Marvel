import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import Marvel from '../images/Marvel2.png'

function CharacterItem({item}) {
    return (
        <div className="contenido">
            <Card className="card" elevation={4}>

                <CardHeader
                avatar={<Avatar><img className="avatar" src={Marvel} alt="" /></Avatar>}
                title={
                    <Typography className="title-card" align="left" variant="h4" component="h2" color="textPrimary" content="p" >{item.name}</Typography>
                }
                />
                <CardMedia>
                    <img className="media" src={item.thumbnail.path + "/landscape_xlarge.jpg"} alt="" />
                </CardMedia>
                <CardContent>
                        <Typography className="text-card" align="left" variant="subtitle1" color="textSecondary" content="p" >
                            Nome: {item.name}
                        </Typography>
                        <Typography className="text-card" align="left" variant="subtitle2" color="textSecondary" content="p" >
                        Descrizione: {item.description}
                        </Typography>
                </CardContent>
                <CardActions>
                        <Button variant="contained" className="link" size="large" color="primary" target="_blank" href={item.urls[0].url}>Biografia</Button>
                </CardActions>
                

            </Card>
        </div>
    )
}

export default CharacterItem
