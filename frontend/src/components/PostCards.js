import React from 'react'
import { Grid, Badge, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PostCards(props) {

    const {data} = props
    const navigate = useNavigate()

    const goToPost = () => {
        navigate("/post/" + data.number)
    }

    const cardFormat = (
        <Card variant="outlined" item sx={{width: "100%"}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    #{data.number}
                </Typography>
                <Typography variant="h6" display="inline-block" component="div" noWrap width="100%">
                    {data.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {data.date}
                </Typography>
                <Typography variant="body2">
                    {data.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={goToPost} size="small">Read More</Button>
            </CardActions>
        </Card>
    )

    return (
        <Grid item xs={5} lg={4} md={3}> 
        {props.index === 0 ? 
            <Badge badgeContent={"!"} color="secondary" sx={{width: "100%"}}>
                {cardFormat}
            </Badge>
            : 
            cardFormat}
            
        </Grid>
    )
}