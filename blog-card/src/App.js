import logo from './logo.svg';
import './App.css';
import { ArrowRightIcon } from '@heroicons/react/20/solid';


function App() {
  return (
    <div className="font-sans h-screen bg-gradient-to-b from-grayLight1 to-grayLight2 flex flex-col items-center justify-center">
      <div className='w-[340px] h-[504px]'>
        <img
          src='spacejoy.jpg'
          className='w-full h-[288px] object-cover rounded-t-md'
          alt='spacejoy'
        />
        <div className='w-full flex flex-col items-start justify-end h-[216px] gap-3 bg-white rounded-b-md px-[16px] py-[24px]'>
          <p className='text-sm leading-5 text-greenDark bg-greenLight border-2 border-greenMedium inline-block px-2 rounded-full'>Interior</p>
          <h2 className='flex h-[28px] font-bold text-black text-lg'>Top 5 Living Room Inspirations</h2>
          <p className='flex h-[48px] text-grayDark'>Curated vibrants colors for your living, make it pop & calm in the same time.</p>
          <div className='flex items-center text-indigo h-[24px]'>
  Read more
  <div className="w-2 h-[2px] bg-indigo-500"></div>
  <ArrowRightIcon className="w-4 h-4 ml-2 text-indigo-500" />
</div>
        </div>
      </div>

    </div>
  );
}

export default App;
