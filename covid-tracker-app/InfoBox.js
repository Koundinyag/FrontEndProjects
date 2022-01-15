import React from 'react'
import {Card,CardContent,Typography} from '@material-ui/core'

function InfoBox({title, cases, isRed, active, ...props}) {
    return (
        <Card
        onClick={props.onClick}
        className={`infoBox ${active && 'infobox--selected'} ${isRed && 'infoBox--red'}`}>
            <CardContent>
                <Typography className='infoBox_title' color='textSecondary'>
                {title}
                </Typography>
                <h2 className={`infoBox_cases ${!isRed && "infoBox_cases--green"}`}>{cases}</h2>
            </CardContent>
        </Card>
    )
}

export default InfoBox
