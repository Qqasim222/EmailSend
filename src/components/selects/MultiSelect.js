import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const MultiSelect = ({ nonProfitUsersList, callback }) => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        callback(personName)
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                <Select
                    displayEmpty
                    name='recipients'
                    value={personName}
                    onChange={(e) => handleChange(e)}
                    input={<OutlinedInput />}
                    multiple
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>Recipients</em>;
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em>Recipients</em>
                    </MenuItem>
                    {
                        nonProfitUsersList.map((name, i) => {
                            return (<MenuItem
                                key={name.email}
                                value={name.email}
                                style={getStyles(name, personName, theme)}
                            >
                                {name.email}
                            </MenuItem>)
                        })}
                </Select>
            </FormControl>
        </div>
    );
}


export default MultiSelect