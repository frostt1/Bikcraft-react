import { useState, useEffect } from 'react'

//api
import { api } from '../api'


export const useFetch = () => {

    const [data, setData] = useState(null)

    useEffect(() => {

        async function fetchData() {

            const bikes = await api.getItems()

            setData(bikes)
        }
        fetchData()

    } ,[])

    return { data }
}