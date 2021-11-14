import React from 'react'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const cardStyle = {
    '&:hover': {
        background: "f00"
    }
}

export default function PostCards(props) {

    const {data} = props

    return (
        <Grid item xs={4} lg={4} md={3}> 
            <Card variant="outlined" item>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {data.id}
                        </Typography>
                        <Typography variant="h5" display="inline-block" component="div">
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
                        <Button size="small">Read More</Button>
                    </CardActions>
            </Card>
        </Grid>
    )
}
