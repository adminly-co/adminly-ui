import React from 'react'
import { Skeleton } from '@mui/material'
import { makeStyles } from '@mui/styles'

const MuiSkeleton = ({
	height = 14,
	width = 100,
	...props
}) => {
	const classes = useStyles()
	return (
		<Skeleton
			width={width}
			height={height}
			className={classes.skeleton}
			variant="rectangular"
			animation="wave"
		/>
	)
}

export default MuiSkeleton

const useStyles = makeStyles((theme) => ({
	skeleton: {
		margin: theme.spacing(1),
		borderRadius: theme.shape.borderRadius,
		backgroundColor: theme.palette.text.secondary,
	},
}))
