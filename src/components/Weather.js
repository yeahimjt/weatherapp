import React from 'react'
import { ICON_URL } from './API'

const Weather = ({data}) => {
  return (
    <div className="grid grid-rows-1 gap-6 p-12 ">
        <div className="min-w-[400px] w-[20%] mx-auto bg-blue-50 p-4 shadow-2xl">
            <div className="flex p-2">
                <div className="flex-col flex-[1]">
                    <p className="text-3xl">{data.city}</p>
                    <p className="text-1xl text-gray-400 italic">{data.weather[0].description}</p>
                </div>
                <div className="bg-gray-400 rounded-full w-20 h-20  hover:scale-125"><img className="w-20 h-20" src={`${ICON_URL}/${data.weather[0].icon}.png`} alt="Weather Icon"/></div>
            </div>
            <div className="flex-1 flex w-full">
                <div className="flex-[0.4] flex justify-center h-full">
                    <p className="text-7xl ">{Math.round(data.main.temp)}</p><p className="relative -top-1 text-s">F</p>
                </div>
                <div className="flex-[0.6] flex">
                    <div className="w-[50%]">
                    <p className="text-sm">Max Tempature</p>
                    <p className="text-sm">Min Tempature</p>
                    <p className="text-sm">Humidity</p>
                    <p className="text-sm">Pressure</p>
                    </div>
                    <div className="w-[50%]">
                    <p className="text-right italic text-gray-500 text-sm">{Math.round(data.main.temp_max)}</p>
                    <p className="text-right italic text-gray-500 text-sm">{Math.round(data.main.temp_min)}</p>
                    <p className="text-right italic text-gray-500 text-sm">{Math.round(data.main.humidity)}</p>
                    <p className="text-right italic text-gray-500 text-sm">{Math.round(data.main.pressure)}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather