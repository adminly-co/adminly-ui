import axios from 'axios'

export const emptyQuery = {
	keywords: null,
	page: 1,
	per_page: 20,
	filters: [],
	order: 'id:desc',
}

export const buildQuery = (params) => {
	if (!params) return {}

	const {
		sort_by,
		sort_direction,
		keywords,
		filters,
		page,
		per_page,
	} = params

	let query = {}

	if (page) {
		query = {
			...query,
			page,
		}
	}

	if (per_page) {
		query = {
			...query,
			per_page,
		}
	}

	if (sort_by && sort_direction) {
		query = {
			...query,
			order: `${sort_by}:${sort_direction}`,
		}
	}

	if (filters) {
		let validFilters = filters
			.filter(validFilter)
			.map(
				(filter) =>
					`${filter.field}:${filter.operator}:${filter.value}`
			)

		if (validFilters.length >= 0) {
			query = {
				...query,
				filters: validFilters.join(','),
			}
		}
	}

	if (keywords && keywords != '') {
		query = {
			...query,
			keywords,
		}
	}

	return query
}

export const validFilter = (filter) => {
	const { field, operator, value } = filter
	if (
		field != null &&
		field != '' &&
		operator != null &&
		operator != '' &&
		value != null &&
		value != ''
	) {
		return true
	} else {
		return false
	}
}

export const dashApi = ({ url, name, token }) => {
	const api = axios.create({
		baseURL: url,
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
		timeout: 30000,
	})

	api.interceptors.response.use(
		(resp) => Promise.resolve(resp.data),
		(error) => Promise.reject(error.response)
	)

	return {
		findOne: async (id) => {
			return await api.get(`${url}/${id}`)?.data
		},
		findMany: async (params) => {
			const resp = await api.get(url, {
				params,
			})
			return {
				data: resp.data,
				meta: resp.meta,
			}
		},
		create: async (resource) => {
			const res = await api.post(url, {
				[name]: resource,
			})
			return res.data
		},
		udpate: async (resource) => {
			const res = await api.put(`${url}/${resource.id}`, {
				[name]: resource,
			})
			return res.data
		},
		destroy: async (id) => {
			const res = await api.delete(`${url}/${id}`)
			return res.data
		},
		updateMany: async (ids, resource) => {
			const res = await api.post(`${url}/update_many`, {
				ids: ids,
				[name]: resource,
			})
			return res.data
		},
		deleteMany: async (ids) => {
			const res = await api.post(`${url}/delete_many`, {
				ids: ids,
			})
			return res.data
		},
	}
}
