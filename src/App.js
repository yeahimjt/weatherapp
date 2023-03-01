import './App.css';
import {useState} from 'react'
import Search from './components/Search';
import Weather from './components/Weather';
import FWeather from './components/FWeather';
import { CWEATHER_URL, FWEATHER_URL } from './components/API';

function App() {
  const [searched, setSearched] = useState(false)
  const [cWeather, setCWeather] = useState(false)
  const [fWeather, setFWeather] = useState(false)
  const defaultCity = "San Antonio"
  const handleOnSearchChange = (searchData) => {
    setSearched(true)
    const [lat,long] = searchData.value.split(" ")
    const cweather =  fetch(`${CWEATHER_URL}/weather?lat=${lat}&lon=${long}&appid=428d3613ff5b47380964dc53f87271d5&units=imperial`)
    const fweather =  fetch(`${FWEATHER_URL}/forecast?lat=${lat}&lon=${long}&appid=428d3613ff5b47380964dc53f87271d5&units=imperial`)
    Promise.all([cweather,fweather])
    .then(async(response)=> {
      const cResponse =  await response[0].json();
      const fResponse = await response[1].json();

      setCWeather({city: searchData.label, ...cResponse}) 
      setFWeather({city: searchData.label, ...fResponse}) 
    })
    .catch((error)=>console.log(error));
  }


  return (

      <div className="flex flex-col w-screen justify-center">
        <div className="flex  w-[100%] justify-center p-4 ">
          <Search searchChanged={handleOnSearchChange}/>
        </div>
        {cWeather && <Weather data={cWeather}/>}
        {fWeather && <FWeather data={fWeather}/>}
      </div>


  );
}

export default App;
