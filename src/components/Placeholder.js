import React from 'react'
import { Box, Avatar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const Placeholder = ({
	icon,
	title,
	subtitle,
	actions,
	...props
}) => {
	const classes = useStyles()

	return (
		<Box
			p={2}
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			height="100%"
			width="100%"
		>
			{icon && (
				<Avatar className={classes.avatar}>{icon}</Avatar>
			)}
			<Typography variant="subtitle1">{title}</Typography>
			<Typography variant="body2" color="textSecondary">
				{subtitle}
			</Typography>
			<div className={classes.actions}>{actions}</div>
		</Box>
	)
}
export default Placeholder

const useStyles = makeStyles((theme) => ({
	avatar: {
		height: '50px',
		width: '50px',
		backgroundColor: theme.palette.common.white,
		marginBottom: theme.spacing(2),
		'&& .MuiSvgIcon-root': {
			color: theme.palette.text.secondary,
		},
	},
	actions: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: theme.spacing(1),
	},
}))
