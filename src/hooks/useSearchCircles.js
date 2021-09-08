import { useState, useMemo } from 'react'

export const useSearchCircles = circles => {

	const [ query, setQuery ] = useState('')
	const [ filteredCircles, setFilteredCircles ] = useState(circles)

	useMemo( () => {		
		const result = circles.filter(circle => {
			return `${circle.name.toLowerCase()} ${circle.slug_name.toLowerCase()}`.includes(query.toLowerCase())
		})

		setFilteredCircles(result)
	}, [ circles, query ])

	return { query, setQuery, filteredCircles }
}