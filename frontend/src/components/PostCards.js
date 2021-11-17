import React from 'react'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function PostCards(props) {

    const {data} = props

    const navigate = useNavigate()

    const goToPost = () => {
        navigate("/post/" + data.number)
    }

    return (
        <Grid item xs={4} lg={4} md={3}> 
            <Card variant="outlined" item>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {data.number}
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
                        <Button onClick={goToPost} size="small">Read More</Button>
                    </CardActions>
            </Card>
        </Grid>
    )
}