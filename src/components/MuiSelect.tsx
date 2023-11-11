import {Box, TextField, MenuItem} from '@mui/material'
import { useState} from 'react'

export const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([])
    console.log({countries})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string'? value.split(','): value)
    }

  return (
    <Box width='250px'>
        <TextField 
            label = 'Select Country'
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            size='small'
            SelectProps={{
                multiple: true
            }}
            color='secondary'
            helperText = 'Please select your country'
        >
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='PH'>Philippines</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>
  )
}

