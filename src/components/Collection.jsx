import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import useDash from '../hooks/useDash'
import SearchInput from './SearchInput'
import { 
  Grid,
  CircularProgress, 
  Box, 
  Button,
  List,
} from '@mui/material'
import Placeholder from './Placeholder'
import { ExpandMore } from '@mui/icons-material'

const DataQuery = ({
  collection,
  filters,
  perPage=10,
  renderItem,
  searchable=false,
  sortBy='id',
  sortDirection='asc',
  variant='list',
  disableLoadMore=false,
	...props
}) => {

  let defaultQuery = {
    filters: filters,
    sort_by: sortBy,
    sort_direction: sortDirection,    
    page: 1,
    per_page: perPage,
  }
	
	const {
		query,
    setQuery,
		activeFilters,
		setActiveFilters,
		isLoading,
    isLoaded,
		resource,
		resources,
		findMany,
		update: updateResource,
		destroy: deleteResource,
		create: createResource,
    loadMore,
		updateMany,
		deleteMany,
		reloadMany,
		setResource,
		setResources,
		sortAll,
		paginate,
    page,
		numPages,
		totalCount,
		startIndex,
		endIndex,
	} = useDash({
		collection: collection
	})

  const handleChange = (e) => {
    setQuery({
      ...query,
      keywords: e.target.value 
    })
  }

  const handleSubmit = (keywords) => {
    findMany({
      ...query, 
      keywords: keywords
    })
  }

	useEffect(() => {
		findMany(defaultQuery)
	}, [])

	return (
    <React.Fragment>
      { searchable && (
        <SearchInput 
          value={ query?.keywords }
          onChange={ handleChange }
          onSubmit={ handleSubmit }
          margin="normal"
          variant="outlined"
          fullWidth
        />
      )}
      { isLoading && !isLoaded &&  
        <Box sx={ sx.loading }>
          <CircularProgress />
        </Box> 
      }      
      { isLoaded && (          
        resources?.length > 0 ? (
          <>
            { variant === 'list' ? (
              <List>
                { resources.map((item, index) => renderItem(item, index))}          
              </List>
            ):(
              <Grid container spacing={1}>
                { resources.map((item, index) => renderItem(item, index))}          
              </Grid>
            )}                          
          
            { page < numPages && !disableLoadMore && (
            <Box sx={ sx.loadMore }>
              <Button 
                sx={ sx.loadMoreButton }
                onClick={ loadMore }
                endIcon={ isLoading ? 
                  <CircularProgress size={20} /> : 
                  <ExpandMore /> 
                }
              >
                Load More
              </Button>
            </Box>
            )}
          </>
        ):(
          <Box p={1}>
            <Placeholder
              title="No Results"
              subtitle="Please try another search."
            />
          </Box>
        )        
      )}      
      
    </React.Fragment>
	)
}

DataQuery.propTypes = {
  collection: PropTypes.string.isRequired,
  filters: PropTypes.object,
  perPage: PropTypes.number,
  renderItem: PropTypes.func.isRequired,
  searchable: PropTypes.bool,
  sortBy: PropTypes.string,
  sortDirection: PropTypes.string,
  variant: PropTypes.oneOf(['list','grid'])
}

export default DataQuery

const sx = {
  loading: {
    m: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  loadMore: {
    m:1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:  '100%'
  },
  loadMoreButton: {
    color: 'text.secondary'
  }
}

