import React, { useContext, useEffect, useState } from 'react'
import { buildQuery, emptyQuery } from '../utils'
import DashContext from '../context/AdminlyContext'

const useAdminly = ({
	collection,
	defaultQuery = emptyQuery,
	...props
}) => {

	const { api } = useContext(DashContext) || {}

	let url = `/${collection}`

	const [query, setQuery] = useState({})
	const [activeFilters, setActiveFilters] = useState([
		defaultQuery.filters,
	])
	const [isLoaded, setIsLoaded] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [isEmpty, setIsEmpty] = useState(false)
	const [id, setId] = useState(props.id)
	const [resource, setResource] = useState({ id: props.id })
	const [resources, setResources] = useState([])
	const [meta, setMeta] = useState({})
	const [params, setParams] = useState({})
	const [page, setPage] = useState(1)
	const [perPage, setPerPage] = useState(20)
	const [numPages, setNumPages] = useState(1)
	const [sortBy, setSortBy] = useState(`id`)
	const [sortDirection, setSortDirection] = useState('desc')
	const [totalCount, setTotalCount] = useState(0)

	const showLoading = () => setIsLoading(true)
	const hideLoading = () => setIsLoading(false)

	const findOne = async (id) => {
		if (!id) return null
		showLoading()
		setIsLoaded(false)
		setId(id)
		const res = await api.get(`${url}/${id}`)
		setResource(res.data)
		setMeta(res.meta)
		setIsLoaded(true)
		hideLoading()
		return res.data
	}

	const findMany = async (query, loadMore = false) => {
		showLoading()
		const queryParams = buildQuery(query)
		setQuery(query)
		setParams(params)
		if (!loadMore) {
			setIsLoaded(false)
		}
		const res = await api.get(url, {
			params: queryParams,
		})
		hideLoading()
		if (res.data) {
			if (!loadMore) {
				setResources(res.data)
			} else {
				setResources([...resources, ...res.data])
			}
			if (res.meta) {
				setMeta(res.meta)
				setPage(res.meta.page)
				setPerPage(res.meta.per_page)
				setTotalCount(res.meta.total_count)
				setNumPages(
					Math.floor(
						res.meta.total_count / res.meta.per_page
					) + 1
				)
			}
			setIsEmpty(res?.data?.length > 0 ? false : true)
			setIsLoaded(true)
			return res.data
		}
	}

	const loadMore = () => {
		let nextPage = page + 1
		let loadMoreResults = true
		findMany({ ...query, page: nextPage }, loadMoreResults)
	}

	const save = (resource, showLoaders = false) => {
		if (resource?.id) {
			return update(resource, showLoaders)
		} else {
			return create(resource, showLoaders)
		}
	}

	const create = async (resource) => {
		showLoading()
		const res = await api.post(url, {
			[collection]: resource,
		})
		if (res.data && res.data.id) {
			setResource(res.data)
			setIsLoaded(true)
			setId(res.data.id)
		}
		hideLoading()
		return res.data
	}

	const update = async (resource) => {
		setId(resource.id)
		showLoading()
		const res = await api.put(`${url}/${resource.id}`, {
			[collection]: resource,
		})
		hideLoading()
		return res.data
	}

	const destroy = async (id) => {
		showLoading()
		const res = await api.delete(`${url}/${id}`)
		setResource({ data: {} })
		hideLoading()
	}

	const updateMany = async (ids, resource) => {
		showLoading()
		const res = await api.post(`${url}/update_many`, {
			ids: ids,
			[collection]: resource,
		})
		hideLoading()
		return res.data
	}

	const deleteMany = async (ids) => {
		showLoading()
		const res = await api.post(`${url}/delete_many`, {
			ids: ids,
		})
		hideLoading()
		return res.data
	}

	const paginate = (page) => {
		findMany({ ...query, page: page })
	}

	const handleChange = (ev) => {
		const { collection } = ev.target
		const value =
			ev.target.type === 'checkbox'
				? ev.target.checked
				: ev.target.value
		setResource({
			...resource,
			[collection]: value,
		})
	}

	const reloadOne = () => {
		findOne(id)
	}

	const reloadMany = () => {
		findMany(query)
	}

	const sortAll = ({ sortBy, sortDirection }) => {
		setSortBy(sortBy)
		setSortDirection(sortDirection)
		findMany({
			...query,
			sort_by: sortBy,
			sort_direction: sortDirection,
		})
	}

	useEffect(() => {
		if (props.id) setId(props.id)
	}, [props.id])

	const startIndex = perPage * (page - 1) + 1
	const endIndex = Math.min(
		perPage * page,
		perPage * (page - 1) + (resources?.length || 0)
	)

	return {
		id,
		isLoading,
		isLoaded,
		isEmpty,
		resource,
		resources,
		setResource,
		setResources,
		meta,
		findOne,
		findMany,
		save,
		update,
		create,
		destroy,
		updateMany,
		deleteMany,
		paginate,
		loadMore,
		handleChange,
		activeFilters,
		setActiveFilters,
		query,
		params,
		page,
		perPage,
		numPages,
		totalCount,
		reloadOne,
		reloadMany,
		sortAll,
		sortBy,
		sortDirection,
		startIndex,
		endIndex,
	}
}

export default useAdminly
