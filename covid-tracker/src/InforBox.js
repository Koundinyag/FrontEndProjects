import { Card,CardContent,Typography } from '@mui/material'
import React from 'react'

function InforBox({title, cases, total}) {
    return (
        <Card className='infoBox'>
        <CardContent>
        {/*Title*/}
        <Typography className="infoBox_title"
        color="textSecondary">
        {title}
        </Typography>
        {/* +120k Number of Cases */}
        <h2 className='infoBox_cases'>{cases}</h2>      

        {/*Total Number of Cases*/}
        <Typography color="textSecondary">
         {total} Total
        </Typography>

        {/*Total Cases*/}
        </CardContent>
        </Card>
    )
}

export default InforBox
