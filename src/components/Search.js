import React, {useState} from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import {geoOptions, URL} from './API'

const Search = ({searchChanged}) => {
    const [search,setSearch] = useState(null);
    const [error, setError] = useState(null)

    const loadOptions = (input) => {
        return (
        fetch(`${URL}/cities?namePrefix=${input}`, geoOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city)=>{
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => setError(err)));
    }
    const handleChange = (searchData) =>{
        setSearch(searchData)
        searchChanged(searchData)
    }
  return (
    <AsyncPaginate
        placeholder='Enter your city'
        debounceTimeout={200}
        value={search}
        loadOptions={loadOptions}
        onChange={handleChange}
    />
  )
}

export default Search