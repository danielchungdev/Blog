import React from 'react'
import {Box, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PostCards() {
    return (
        <Grid item xs={4}> 
            <Card variant="outlined" item>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        React
                    </Typography>
                    <Typography variant="h5" display="inline-block" component="div">
                        Creating a Blog web app
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Nov. 14, 2021
                    </Typography>
                    <Typography variant="body2">
                        description
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Read More</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
