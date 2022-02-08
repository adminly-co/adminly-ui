import React from 'react'
import AdminlyContext from './AdminlyContext'
import axios from 'axios'

const AdminlyProvider = ({ token, url, children }) => {
  
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

  const value = {
		api
	}

	return (
		<AdminlyContext.Provider value={value}>
			{children}
		</AdminlyContext.Provider>
	)
}

export default AdminlyProvider