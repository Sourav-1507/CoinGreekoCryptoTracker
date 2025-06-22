import banner from '../../assets/banner2.jpg';
function Banner(){
  return(
    <div className='mt-6 w-full h-[25rem] relative '>
        <img src={banner} alt="Logo" className='w-full h-full'/>

        <div className='absolute top-20 left-0 right-0 mx-auto w-[20rem]'>
          <div className='flex flex-col gap-4'>
             <div className='font-semibold text-5xl text-white'>
                Crypto Tracker

             </div>
             <div className='font-semibold text-sm text-white text-center'>
                  Get all info

             </div>
          </div>


        </div>


    </div>
    
  )
}
export default Banner;