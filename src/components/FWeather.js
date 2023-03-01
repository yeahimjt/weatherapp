import React, {useState,useEffect} from 'react'
import {format} from 'date-fns'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import { ICON_URL } from './API'
const FWeather = (data) => {
    const [open, setOpen] = useState(null)
    const [openObject, setOpenObject] = useState([])
    const [forecast,setForecast] = useState([])
    const Weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const handleClick = (value) => {
        console.log(value)
    }
    useEffect(()=>{
        let updateForecast=[
            data.data.list[0],
            data.data.list[8],
            data.data.list[12],
            data.data.list[18],
            data.data.list[32],
        ]
        setForecast(forecast => ([
            ...updateForecast
        ]))

    },[data])
    // console.log(data.data.list[0])
    // console.log(data.data.list[8])
    // console.log(data.data.list[12])
    // console.log(data.data.list[18])
    // console.log(data.data.list[32])


    function getDay(date) {

        let day = new Date(date.split(" ")[0])
        return day.toString().split(" ")[0]
    }
    console.log(forecast)
  return (
    <>
    <Accordion allowZeroExpanded={false}>
    {forecast.map((item,index) => {return (
        <AccordionItem className="" key={index}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <div className="bg-blue-50 w-[50%] m-2 mb-0 min-w-[400px] mx-auto flex-col hover:scale-105 hover:bg-blue-200 transition-all" >
                        <div className="px-5 relative p-4 flex w-[100%]">
                            <div className="flex-1">
                                <p>{getDay(item.dt_txt)}</p>
                                <p className="text-gray-500 italic">{item.weather[0].description}</p>
                            </div>
                            <div className="flex-[0.1]">
                                <div className="w-10 h-10 bg-gray-900 rounded-full"><img src={`${ICON_URL}/${item.weather[0].icon}.png`} alt="Weather Icon"/></div>
                            </div>
                                <p className="flex">{item.main.temp_min}<p className="text-sm relative -top-1">F</p> / {item.main.temp_max}<p className="text-sm relative -top-1">F</p></p>
                        </div>
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <div className="flex w-[50%] mx-auto transition-all">
            <div className="flex w-[99%] p-6 mx-auto gap-16 bg-blue-100">
                <div className="flex-1 flex">
                    <div className="flex-[1]"><p>Feels Like</p><p>Pressure</p></div>
                    <div><p>{item.main.feels_like}</p><p>{item.main.pressure}</p></div>
                </div>
                <div className="flex-1 flex">
                    <div className="flex-[1]"><p>Wind Speed</p><p>Humidity</p></div>
                    <div><p>{item.wind.speed}</p><p>{item.main.humidity}</p></div>
                </div>
            </div>
        </div>
            </AccordionItemPanel>
        </AccordionItem>
    )})}
    </Accordion>
    </>
  )
}

export default FWeather