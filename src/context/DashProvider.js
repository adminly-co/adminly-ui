import React from 'react'
import DashContext from 'context/DashContext'
import axios from 'axios'

const DashProvider = ({ token, url, children }) => {
  
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
		<DashContext.Provider value={value}>
			{children}
		</DashContext.Provider>
	)
}

export default DashProvider