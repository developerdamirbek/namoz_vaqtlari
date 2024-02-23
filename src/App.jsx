import { useState, useEffect } from 'react';
import axios from 'axios';
import img from './assets/images/bg-image.png';
import bg1 from './assets/images/bomdod.svg'
import bg2 from './assets/images/sun.svg'
import bg3 from './assets/images/peshin.svg'
import bg4 from './assets/images/asr.svg'
import bg5 from './assets/images/shom.svg'
import bg6 from './assets/images/xufton.svg'
let weekday;
let date;

function App() {
  const [city, setCity] = useState('Toshkent');
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    fetchPrayerTimes();
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [city]);

  const fetchPrayerTimes = async () => {
    try {
      const response = await axios.get(`https://islomapi.uz/api/present/day?region=${city}`);
      weekday = response.data.weekday;
      date = response.data.date;
      if (response.status === 200) {
        setPrayerTimes(response.data.times);
      } else {
        throw new Error('Failed to fetch prayer times');
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="h-screen max-sm:h-[100%] w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
      <div className="container">
        <h1 className='font-bold text-white text-4xl text-center pt-10 pb-10 border-b mb-10 max-sm:text-[24px] max-sm:pt-5 max-sm:pb-5 max-sm:mb-5 '>Namoz vaqtlari</h1>
        <div className='flex items-center justify-center gap-10 mb-[20px] max-sm:mb-2 max-sm:gap-0 max-sm:justify-between'>
          <p className='font-bold text-white text-[22px] max-sm:text-[18px] '>Hududni tanlang:</p>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='border rounded-full cursor-pointer text-center appearance-none py-3 px-4 bg-transparent font-bold text-white text-[22px] max-sm:text-[18px] max-sm:py-2 '
          >
            <option className="bg-gray-800 cursor-pointer text-start hover:bg-gray-700" value="Toshkent">Toshkent</option>
            <option className="bg-gray-800 cursor-pointer text-start hover:bg-gray-700" value="Andijon">Andijon</option>
            <option className="bg-gray-800 cursor-pointer text-start hover:bg-gray-700" value="Namangan">Namangan</option>
            <option className="bg-gray-800 cursor-pointer text-start hover:bg-gray-700" value="Farg'ona">Farg'ona</option>
            <option className="bg-gray-800 cursor-pointer text-start hover:bg-gray-700" value="Sirdaryo">Sirdaryo</option>
            <option className="bg-gray-800 cursor-pointer text-start hover:bg-gray-700" value="Jizzax">Jizzax</option>
            <option className="bg-gray-800 cursor-pointer text-start hover:bg-gray-700" value="Samarqand">Samarqand</option>
            <option className="bg-gray-800 cursor-pointer text-start hover:bg-gray-700" value="Buxoro">Buxoro</option>
            <option className="bg-gray-800 cursor-pointer text-start hover:bg-gray-700" value="Navoiy">Navoiy</option>
            <option className="bg-gray-800 cursor-pointer text-start hover:bg-gray-700" value="Xorazm">Xorazm</option>
            <option className="bg-gray-800 cursor-pointer text-start hover:bg-gray-700" value="Qashqadaryo">Qashqadaryo</option>
            <option className="bg-gray-800 cursor-pointer text-start hover:bg-gray-700" value="Surondaryo">Surxondaryo</option>
          </select>
        </div>
        <div className="text-white text-lg mt-10 max-sm:mt-5 flex justify-between mb-[30px] ">
          <div className='flex items-center gap-4 max-sm:gap-3'>
            <p className=' font-bold text-white text-[24px] max-sm:text-[18px] '>Mintaqa:</p>
            <p className='font-bold text-[#ffc700] text-[24px] max-sm:text-[18px]'>{city}</p>
          </div>

          <div className='flex gap-5 items-center max-sm:flex-col'>
            <div className=' max-sm:hidden flex items-center gap-3 '>
              <p className='font-semibold text-[22px] max-sm:text-[18px] text-[#ffc700]'>{weekday},</p>
              <p className='font-semibold text-[22px] max-sm:text-[18px] text-[#ffc700]'>{date}</p>
            </div>
            <p className='text-[22px] w-[120px] max-sm:text-[18px] font-semibold'>{currentDate.toLocaleTimeString('en-US')}</p>
          </div>

        </div>
        {prayerTimes && (
          <div className="mt-10">
            <ul className="flex items-center justify-between max-sm:grid grid-cols-2 gap-3  ">
              <li style={{ backgroundImage: `url(${bg1})` }} className=' max-sm:w-[150px] max-sm:h-[300px] relative w-[200px] bg-no-repeat bg-contain backdrop-blur-sm bg-center h-[397px] overflow-hidden rounded-3xl shadow-custom bg-[#ffffff73] '>
                <h3 className='text-[#ffc700] font-bold text-center text-[32px] pt-[20px] max-sm:text-[28px] '>Bomdod</h3>
                <p className='absolute translate-x-[-50%] left-[50%] bottom-5 font-bold text-white text-[42px] max-sm:text-[34px]'>{prayerTimes.tong_saharlik}</p>
              </li>
              <li style={{ backgroundImage: `url(${bg2})` }} className=' max-sm:w-[150px] max-sm:h-[300px] relative w-[200px] bg-no-repeat bg-contain backdrop-blur-sm bg-center h-[397px] overflow-hidden rounded-3xl shadow-custom bg-[#ffffff73] '>
                <h3 className='text-[#ffc700] font-bold text-center text-[32px] pt-[20px] max-sm:text-[28px]'>Quyosh</h3>
                <p className='absolute translate-x-[-50%] left-[50%] bottom-5 font-bold text-white text-[42px] max-sm:text-[34px]'>{prayerTimes.quyosh}</p>
              </li>
              <li style={{ backgroundImage: `url(${bg3})` }} className=' max-sm:w-[150px] max-sm:h-[300px] relative w-[200px] bg-no-repeat bg-contain backdrop-blur-sm bg-center h-[397px] overflow-hidden rounded-3xl shadow-custom bg-[#ffffff73] '><h3 className='text-[#ffc700] font-bold text-center text-[32px] pt-[20px] max-sm:text-[28px]'>Peshin</h3>
                <p className='absolute translate-x-[-50%] left-[50%] bottom-5 font-bold text-white text-[42px] max-sm:text-[34px]'>{prayerTimes.peshin}</p></li>
              <li style={{ backgroundImage: `url(${bg4})` }} className=' max-sm:w-[150px] max-sm:h-[300px] relative w-[200px] bg-no-repeat bg-contain backdrop-blur-sm bg-center h-[397px] overflow-hidden rounded-3xl shadow-custom bg-[#ffffff73] '><h3 className='text-[#ffc700] font-bold text-center text-[32px] pt-[20px] max-sm:text-[28px]'>Asr</h3>
                <p className='absolute translate-x-[-50%] left-[50%] bottom-5 font-bold text-white text-[42px] max-sm:text-[34px]'>{prayerTimes.asr}</p></li>
              <li style={{ backgroundImage: `url(${bg5})` }} className=' max-sm:w-[150px] max-sm:h-[300px] relative w-[200px] bg-no-repeat bg-contain backdrop-blur-sm bg-center h-[397px] overflow-hidden rounded-3xl shadow-custom bg-[#ffffff73] '><h3 className='text-[#ffc700] font-bold text-center text-[32px] pt-[20px] max-sm:text-[28px]'>Shom</h3>
                <p className='absolute translate-x-[-50%] left-[50%] bottom-5 font-bold text-white text-[42px] max-sm:text-[34px]'>{prayerTimes.shom_iftor}</p></li>
              <li style={{ backgroundImage: `url(${bg6})` }} className=' max-sm:w-[150px] max-sm:h-[300px] relative w-[200px] bg-no-repeat bg-contain backdrop-blur-sm bg-center h-[397px] overflow-hidden rounded-3xl shadow-custom bg-[#ffffff73] '><h3 className='text-[#ffc700] font-bold text-center text-[32px] pt-[20px] max-sm:text-[28px]'>Xufton</h3>
                <p className='absolute translate-x-[-50%] left-[50%] bottom-5 font-bold text-white text-[42px] max-sm:text-[34px] '>{prayerTimes.hufton}</p></li>
            </ul>
          </div>
        )}
        <footer className='hidden py-10 max-sm:block '>
          <p className=' text-center text-white text-[20px] '>Created by <a className='text-[#ffc700]' href="https://t.me/damir_toga">
            Damirbek
          </a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
