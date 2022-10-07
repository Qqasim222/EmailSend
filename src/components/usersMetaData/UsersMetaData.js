import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NonProfitForm from '../userForms/NonProfitForm';
import FoundationForm from '../userForms/FoundationForm';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const UsersMetaData =({onAddNonProfitUser,onAddFoundationUser})=> {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{marginLeft:'200px'}}>
          <Tab label="Non-Profits" {...a11yProps(0)} />
          <Tab label="Foundations" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
      <NonProfitForm onAddNonProfitUser={onAddNonProfitUser}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <FoundationForm onAddFoundationUser={onAddFoundationUser}/>
      </TabPanel>
    </Box>
  );
}

export default UsersMetaData
