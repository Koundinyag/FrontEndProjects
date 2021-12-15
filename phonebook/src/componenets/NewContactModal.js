import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function NewContactModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    <SpeedDial
    onClick={handleOpen}
    ariaLabel="SpeedDial basic example"
    sx={{ position: 'absolute', bottom: 16, right: 16 }}
    icon={<SpeedDialIcon />}
  >
   </SpeedDial>      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h1>New Contact</h1>
            <TextField id="outlined-basic" label = "First Name" variant="outlined"/>
            <br/>
            <br/>


            <TextField id="outlined-basic" label = "Last Name" variant="outlined"/>
            <br/>
            <br/>


            <TextField id="outlined-basic" label = "Mobile Number" variant="outlined"/>
            <br/>
            <br/>


            <TextField id="outlined-basic" label = "Date Of Birth" variant="outlined"/>
            <br/>
            <br/>


            <TextField id="outlined-basic" label = "Address" variant="outlined"/>
            <br/>
            <br/>
            <Button variant="contained" color="secondary">Save Contact</Button>
        </Box>
      </Modal>
    </div>
  );
}
