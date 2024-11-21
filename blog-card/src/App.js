import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-grayLight1 to-grayLight2 flex flex-col items-center justify-center">
      <div className='w-[340px] h-[504px]'>
        <img
          src='spacejoy.jpg'
          className='w-full h-[288px] object-cover rounded-t-md'
          alt='spacejoy'
        />
        <div className='w-full h-[216px] bg-white rounded-b-md px-[16px] py-[24px]'>
          <p className='text-sm text-greenDark bg-greenLight border-2 border-greenMedium inline-block px-2 rounded-full'>Interior</p>
          <h2 className='font-bold text-black text-lg'>Top 5 Living Room Inspirations</h2>
          <p></p>
          <button className='text-indigo'>Read more</button>
        </div>
      </div>

    </div>
  );
}

export default App;
