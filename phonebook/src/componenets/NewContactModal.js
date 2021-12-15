import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeAdress, changeDateOfBirth, changeEMailID, changeMobile, changeName, new_contact } from '../actions';

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

    const data = useSelector(state=> state.newContact)
  const dispatch = useDispatch()

  return (
    <div>
    <SpeedDial
    onClick={handleOpen}
    ariaLabel="SpeedDial basic example"
    sx={{ position: 'absolute', bottom: 16, right: 16 }}
    icon={<SpeedDialIcon />}
  >
   </SpeedDial><Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h1>New Contact</h1>
            <TextField id="outlined-basic" label = "Name" variant="outlined" value={data.name}
            onChange = {e => dispatch(changeName(e.target.value))}
            />
            <br/>
            <br/>

            <TextField id="outlined-basic" label = "Mobile Number" variant="outlined" value={data.mobile} onChange = {e => dispatch(changeMobile(e.target.value))}/>
            <br/>
            <br/>


            <TextField id="outlined-basic" label = "EMail ID" variant="outlined" value={data.email} onChange = {e => dispatch(changeEMailID(e.target.value))}/>
            <br/>
            <br/>


            <TextField id="outlined-basic" label = "Date of Birth " variant="outlined" value={data.dob} onChange = {e => dispatch(changeDateOfBirth(e.target.value))}/>
            <br/>
            <br/>

            <TextField id="outlined-basic" label = "Address" variant="outlined" value={data.adress} onChange = {e => dispatch(changeAdress(e.target.value))}/>
            <br/>
            <br/>
            <Button variant="contained" color="secondary"
            onClick={() => {
                dispatch(new_contact(data))
                handleClose()
            }}


            >Save Contact</Button>
        </Box>
      </Modal>
    </div>
  );
}
