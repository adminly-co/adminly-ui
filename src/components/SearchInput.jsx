import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Search, X } from 'react-feather'

const SearchInput = ({
  value,
  onChange,
  onSubmit,
  placeholder="Search..."
}) => {

  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      onSubmit(value)
    }
  }  

  const onClear = () => {
    onSubmit('')
  }

  return (
    <Paper sx={ sx.paper }>
      <IconButton 
        onClick={ onSubmit }
        type="submit" sx={ sx.iconButton } aria-label="search">
        <Search size={20} />
      </IconButton>      
      <InputBase
        sx={ sx.inputBase }
        placeholder={ placeholder }
        onChange={ onChange }
        value={ value || ''}
        inputProps={{ 'aria-label': placeholder }}
        onKeyPress={ onKeyPress }
      />
      { value?.length > 0 && (
        <IconButton 
          onClick={ onClear }
          type="submit" sx={ sx.iconButton } aria-label="search">
          <X size={18} />
        </IconButton>      
      )}
    </Paper>
  );
}

export default SearchInput 

const sx = {
  paper: { 
    p: '2px 4px', 
    display: 'flex', 
    alignItems: 'center', 
    width: '100%' 
  },
  inputBase: { 
    ml: 1, 
    flex: 1 
  },
  iconButton: { 
    p: '10px' 
  },
}