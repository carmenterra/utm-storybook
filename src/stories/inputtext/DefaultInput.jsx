import React from 'react';
import './inputbox.scss';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';


class DefaultInput extends React.Component {
  render() {
    return (
      <div>
          <Input Disabled defaultValue="Hello world" 
          sx={{'& .MuiInput': {
              backgroundColor: 'blue'},
              }} />
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" 
      sx={{'& .MuiInputBase-input': {
          backgroundColor: 'pink'},
          }}/>
    </Box>
      </div>
    );
  }
}

export default DefaultInput;
