import React, { useEffect, useState } from 'react'
import {
  Box,
  CircularProgress,
	Typography,	
} from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import useAdminly from '../hooks/useAdminly'
import useResponsive from '../hooks/useResponsive'
import {
	ChevronLeft,
	ChevronRight,
} from '@mui/icons-material'

const MuiCarousel = ({
  collection,
  variant='list',
  sortBy='id',
  sortDirection='asc',
  filters,
  renderItem,
  perPage=16,
  searchable=false,
  autoPlay=false,
  animation='slide',
  label="Collection",
  xs=12,  
  md=6,
  lg=4,
  xl=3,
	...props
}) => {

  let defaultQuery = {
    filters: filters,
    sort_by: sortBy,
    sort_direction: sortDirection,    
    page: 1,
    per_page: perPage,
  }	
  
  const [group, setGroup] = useState([])
  const [numItemsPerRow, setNumItemsPerRow] = useState(3)
  const [hideNavArrows, setHideNavArrows] = useState(false)
  
  const { isTablet, isMobile, isDesktop } = useResponsive()
	
	const {
    isLoading,
    isLoaded,
		resources,
		findMany,
	} = useAdminly({
		collection: collection
	})

  const handleGroupResources = () => {
    let newGroup = []
    if (resources.length > 0) {
      for (let i = 0; i < resources.length; i = i + numItemsPerRow) {
        let numItems = Math.min(i + numItemsPerRow, resources.length)
        newGroup[i / numItemsPerRow] = resources.slice(i, numItems)        
      }
      setGroup(newGroup)
    }
  }

  useEffect(() => {
    if (isMobile) {
      setNumItemsPerRow(12 / xs)
    } else if (isTablet) {
      setNumItemsPerRow(12 / md)
    } else if (isDesktop) {
      setNumItemsPerRow(12 / lg)
    } else {
      setNumItemsPerRow(12 / xl)
    }    
  }, [isMobile, isTablet, isDesktop])

  useEffect(() => {
    handleGroupResources()
    if(resources?.length <= numItemsPerRow){
      setHideNavArrows(true)
    }else{
      setHideNavArrows(false)
    }
  }, [resources?.length, numItemsPerRow])

  useEffect(() => {
    handleGroupResources()
  },[resources])

	useEffect(() => {
		findMany(defaultQuery)
	}, [])

	return (
		<Box sx={sx.root}>
			<Box sx={sx.subtitle}>
				<Typography variant="h3">{label}</Typography>
			</Box>      
      { isLoaded && (
        <Carousel
          autoPlay={autoPlay}
          navButtonsAlwaysVisible
          PrevIcon={          
            <ChevronLeft sx={sx.icon} />
          }
          NextIcon={
            <ChevronRight
              sx={sx.icon}
            />
          }
          navButtonsWrapperProps={ sx.navButtonsWrapper }
          navButtonsProps={sx.navButtons}
          navButtonsAlwaysInvisible={hideNavArrows}
          animation={'slide'}
        >
          {group?.map((row, i) => (
            <Box key={i} sx={sx.row}>
              {row?.length > 0 && row.map((item, index) => renderItem(item, index))}
            </Box>
          ))}
        </Carousel>
      )}

      { isLoading &&  
        <Box sx={ sx.loading }>
          <CircularProgress />
        </Box> 
      } 
		</Box>
	)
}

export default MuiCarousel

const sx = {
  root: {
		minHeight: 480,    
	},
	row: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
    gap: 1,
    md: {
      margin: 0,
			justifyContent: 'center',		
    }				
	},
	subtitle: {
		my: 1,
	},
	icon: {
    color: 'common.white',
		height: 44,
		width: 44,
	},	
  loading: {
    m: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  navButtonsWrapper: {
		style: {
			bottom: '80px',
			top: 'unset',
		},
	},
	navButtons: {
		style: {
			backgroundColor: 'transparent',
		},
	}
}
