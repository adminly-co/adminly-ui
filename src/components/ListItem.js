import React from 'react'
import { 
  Avatar,
  IconButton,    
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  Menu,
  MenuItem
} from '@mui/material'
import { MoreHoriz } from '@mui/icons-material'
import useMenu from '../hooks/useMenu'

const MuiListItem = ({ 
    primary,
    secondary,
    image,
    onClick,
    onEdit,
    onDelete,
    secondaryActions,
    ...props 
  }) => {

    const {
      open,
      anchorEl,
      closeMenu,
      openMenu,
    } = useMenu()
    
  return (
    <ListItem 
      button={ onClick ? true : false }
      onClick={ onClick && onClick }
    >
      { image && (
        <ListItemIcon>
          <Avatar src={ image } />
        </ListItemIcon>
      )}
      <ListItemText 
        primary={primary} 
        secondary={secondary}
      />
      { (onEdit || onDelete) && (
        <ListItemSecondaryAction>
          <IconButton onClick={ openMenu }>
            <MoreHoriz />
          </IconButton>
          <Menu
            open={open}
            onClose={closeMenu}
            anchorEl={anchorEl}
          >
            { onEdit && (
              <MenuItem onClick={ onEdit }>
                <ListItemText>Edit</ListItemText>
              </MenuItem>
            )}
            { onDelete && (
              <MenuItem onClick={ onDelete }>
                <ListItemText>Delete</ListItemText>
              </MenuItem>
            )}
          </Menu>
        </ListItemSecondaryAction>
      )}    
    </ListItem>
  )
}


export default MuiListItem