import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { 
  Grid,
  Box,
  IconButton,    
  Menu,
  MenuItem,
  ListItemText
} from '@mui/material'
import { MoreHoriz } from '@mui/icons-material'
import useMenu  from '../hooks/useMenu'

const DashGridItem = ({ 
    primary,
    secondary,
    image,
    onClick,
    onEdit,
    onDelete,
    secondaryActions,
    actions,
    xs=12,
    sm=6,
    md=4,
    lg=3,
    ...props 
  }) => {

  const {
    open,
    anchorEl,
    closeMenu,
    openMenu,
  } = useMenu()

  const renderImage = () => (    
    <CardMedia
      component="img"
      height="140"
      image={ image }
      alt={ primary }
    />
  )
    
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg}>
      <Card sx={ sx.card }>
        { onClick && (
          <CardActionArea onClick={onClick}>
          { image && renderImage() }          
          </CardActionArea>
        )}
        { !onClick && image && renderImage() }                  
        <CardContent sx={ sx.cardContent }>
          <Typography gutterBottom variant="h5" component="div">
            { primary }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { secondary }
          </Typography>
        </CardContent>
        { (onEdit || onDelete || actions) && (
        <CardActions>
          <Box sx={ sx.actions }>
            <Box>
              { actions }
            </Box> 
            <Box>
              {(onEdit || onDelete) && (
                <React.Fragment>
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
                </React.Fragment>
              )}
            </Box>
          </Box>
        </CardActions>
        )}
      </Card>
    </Grid>
  )
}


export default DashGridItem

const sx = {
  actions: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    width: '100%'
  },
  cardContent: {
    height: 140,
    overflow: 'hidden'
  }
}