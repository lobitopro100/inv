import Image from 'next/image';
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'


function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {

  const [windowWidth, setWindowWidth] = useState<any>();

  const { width } = useWindowSize()

  useEffect(() => {
    setWindowWidth(width)
  }, [width])
  const [isUp, setIsUp] = useState(true);
  const [isUpGlobo, setIsUpisUpGlobo] = useState(true);


  const handleNuves = () => {
    setIsUp(!isUp);
  };

  const handleGlobo = () => {
    setIsUpisUpGlobo(!isUpGlobo);
  };

  setInterval(handleNuves, 2000)
  setInterval(handleGlobo, 5000)
  return (
    <>
      {
        windowWidth > 444
          ? <p className=' flex justify-center items-center h-screen font-light text-5xl text-center text-white p-9'>
            Ingresa desde el celular para ver el contenido
          </p>
          :
          <div className='container mt-5'>
            <div className='justify-center flex '>
              <Image
                src={"/svg/logo_eticos.svg"}
                width={200}
                height={66}
                alt='logo eticos'
              />
            </div>
            <div className='container mt-5 px-4'>
              <h1 className='text-center text-3xl font-light text-white'>UN GRAN HITO DEL <br />CUÁL <b className='font-bold'>QUEREMOS QUE <br />HAGAS PARTE</b></h1>
            </div>
            {/* invitacion\public\svg\circo.svg */}
            <div className=''>
            <Image
                className={classNames(isUpGlobo ? "translate-y-0" : "translate-y-9", "absolute bottom-[19rem] left-7 w-20 opacity-100 transform duration-[6000ms]")}
                src={"/svg/globo.svg"}
                width={200}
                height={66}
                alt='logo eticos'
              />

              <Image
                className="absolute bottom-[6.5rem] left-7 w-[16rem]"
                src={"/svg/circo.svg"}
                width={200}
                height={66}
                alt='logo eticos'
              />


              <Image
                className={classNames(isUp ? "translate-y-0" : "translate-y-9", "absolute bottom-24 left-0 w-56 opacity-100 transform duration-[2000ms] delay-300")}
                src={"/svg/nuves/5.png"}
                width={200}
                height={66}
                alt='logo eticos'
              />


              <Image
                className={classNames(isUp ? "translate-y-0" : "translate-y-9", "absolute bottom-7 right-0 w-56 opacity-100 transform duration-[2000ms]")}
                src={"/svg/nuves/4.png"}
                width={200}
                height={66}
                alt='logo eticos'
              />

              <Image
                className="absolute bottom-14 right-0 w-32"
                src={"/svg/ruleta.svg"}
                width={200}
                height={66}
                alt='logo eticos'
              />

              <Image
                className={classNames(isUp ? "translate-y-0" : "translate-y-8", "absolute bottom-0 left-0 w-96 opacity-100 transform duration-[2000ms]")}
                src={"/svg/nuves/3.png"}
                width={200}
                height={66}
                alt='logo eticos'
              />
              <Image
                className='absolute bottom-0 left-0 w-32'
                src={"/svg/nuves/1.png"}
                width={200}
                height={66}
                alt='logo eticos'
              />
              <Image
                className='absolute bottom-0 right-0 w-56'
                src={"/svg/nuves/2.png"}
                width={200}
                height={66}
                alt='logo eticos'
              />

            </div>
          </div>
      }
    </>
  )
}


{/* <Confetti
         width={width}
         height={height}
        /> */}
