
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import Recent from './componenets/Recent'
import Allcontacts from './componenets/Allcontacts'
import StarsIcon from '@mui/icons-material/Stars';
import PersonIcon from '@mui/icons-material/Person';
import Favourates from './componenets/Favourates'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(1);
  return (
    <Box style={{ width: 400, margin: 'auto' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Allcontacts" icon={<PersonIcon />} />
        <BottomNavigationAction label="Favourates" icon={<StarsIcon />} />
      </BottomNavigation>
       {(value === 0) && <Recent/>}
       {(value ===1 )&&<Allcontacts/>}
       {(value === 2)&&<Favourates/>}

    </Box>
  );
}