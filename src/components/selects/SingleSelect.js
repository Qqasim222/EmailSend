import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SingleSelect = ({ foundationUsersList, callback }) => {
  const [fEmail, setFEmail] = React.useState('');

  const handleChange = (event) => {
    setFEmail(event.target.value);
    callback(event.target.value)
  };
  return (
    <>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120, width: '300px', marginTop: '22px' }}>
        <InputLabel id="demo-simple-select-filled-label" required>Sender</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          name='sender'
          value={fEmail}
          onChange={(e) => handleChange(e)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            foundationUsersList?.map((FoundEmail, ind) => {
              return (
                <MenuItem value={FoundEmail.emails} required>{FoundEmail.emails}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>

    </>
  )
}
export default SingleSelect

