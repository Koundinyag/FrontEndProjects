import React from 'react'
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { add_recent, toggle_fav } from '../actions';
import { useDispatch } from 'react-redux';
import PhoneIcon from '@mui/icons-material/Phone';
import { IconButton } from '@mui/material';



const styles = {
    container: {
        display: 'flex',
        height: '50px',
        padding: '6px',
        alignItems: 'center'
    },
    infoContainer: {
        flex:1,
        paddingLeft:'8px',
        paddingRight: '8px'
    },
    mobile:{
        fontSize:'15px',
        color:'grey',
    }
}

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }


function Contactcard(props) {
  const dispatch = useDispatch()

  return (
        <div style ={ styles.container}>
        <div>
        <Avatar {...stringAvatar(props.name)} />
        </div>
        <div style = {styles.infoContainer}>
        {props.name}
        <br/>
        <span style={styles.mobile}>+91 {props.mobile}</span>
        {props.timestamp &&(<><br/><span style={styles.mobile}> {props.timestamp}</span></>)}
        </div>
        <div>
        <Rating
        size="large"
        name="simple-controlled"
        value={props.isFav}
        max={1}
        onChange={(event, newValue) => {
          // setValue(false);
          dispatch(toggle_fav(props.id))
        }}
         />
        </div>
        <div>
        <IconButton color="primary" aria-label="add an alarm"
        onClick= {() => {
          //Call Functionality
          const today = new Date();
          dispatch(add_recent({
            id:props.id,
            time: today.toLocaleString()

          }))

        }}
        >
        <PhoneIcon />
        </IconButton>    
        </div>  
        
        </div>
    )
}

export default Contactcard