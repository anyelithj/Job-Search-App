import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

const Controls = () => {
  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        // options={top100Films}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
      <Autocomplete
        id="combo-box-demo"
        // options={top100Films}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
    <Autocomplete
        id="combo-box-demo"
        // options={top100Films}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        // options={top100Films}
        getOptionLabel={(option) => option.title}
        // defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="limitTags"
            placeholder="Favorites"
          />
        )}
      />
    </div>
  )
}

export default Controls
