import React from 'react'
import './Header.css'
import video from './main_video.mp4';
import meal from './meal.png';
import order from './order.png';
import qrcode from './qr-code.png';
import menuvideo from './menu final video.gif';
const Header = () => {
    return (

    <div>
        <div className='main-video'>
            <video loop muted autoPlay src={video}></video>
        </div>
    
    <div className="h-[230px] md:h-[260px] lg:h-[340px] xl:h-[340px] flex justify-center items-center overflow-hidden">
    <div className=" flex justify-evenly items-center w-[95%] xl:w-[65%] h-[100%] mt-3">
        <div
            className=" flex flex-col justify-center items-center h-[300px] w-[33%] xl:h-[300px] xl:w-[300px]">
            <img className="h-[21%] w-[60%] md:h-[40%] lg:w-[40%] lg:h-[40%] xl:w-[40%] xl:h-[40%] mt-8" src={qrcode} alt="" />
            <div className="text-center h-[45%]">
                <h1 className="font-bold text-lg lg:text-2xl xl:text-4xl">SCAN</h1>
                <p className="font-semibold text-sm lg:text-lg xl:text-2xl text-[#696969]">Scan Q-R code to open
                    Menu</p>
            </div>
        </div>
        <div
            className=" flex flex-col justify-center items-center h-[300px] w-[33%] xl:h-[300px] xl:w-[300px] ">
            <img className="h-[23%] w-[60%] md:h-[40%] lg:w-[40%] lg:h-[40%] xl:w-[40%] xl:h-[40%] mt-10" src={meal} alt="" />
            <div className="text-center h-[50%]">
                <h1 className="font-bold text-lg lg:text-2xl xl:text-4xl">ORDER</h1>
                <p className="font-semibold text-sm lg:text-lg xl:text-2xl text-[#696969]">Order your Meal</p>
            </div>
        </div>
        <div
            className=" flex flex-col justify-center items-center h-[300px] w-[33%] xl:h-[300px] xl:w-[300px] ">
            <img className="h-[20%] w-[55%] md:h-[40%] lg:w-[40%] lg:h-[40%] xl:w-[40%] xl:h-[40%] mt-12" src={order} alt="" />
            <div className="text-center h-[50%]">
                <h1 className="font-bold text-lg lg:text-2xl xl:text-4xl">ENJOY</h1>
                <p className="font-semibold text-sm lg:text-lg xl:text-2xl text-[#696969]">Enjoy your Meal</p>
            </div>
        </div>
    </div>
</div>
<div id="firstblock" className="h-[100px]  flex justify-center items-center overflow-hidden">
            <img width="250px" className="lg:w-[400px]" src={menuvideo} alt=""/>
        </div>
</div>
    )
}

export default Header
