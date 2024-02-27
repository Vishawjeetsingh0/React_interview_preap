import React, { useRef, useState } from 'react'

const VideoPausePlay = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsplaying] = useState(false);

    function handleClick(){
        const nextplaying = !isPlaying
        setIsplaying(nextplaying)

        if(nextplaying){
            videoRef.current.play()
        }else{
            videoRef.current.pause()
        }
    }



  return (
    <div className='border-4 border-purple-800 flex flex-col justify-center text-2xl'>
        <h1 className='text-blue-600 text-center'>Example : 2.VideoPausePlay</h1>
        <button className='m-2 p-2 bg-green-400' onClick={handleClick}>{isPlaying?"Pause":"Play"}</button>
        <video className='m-auto pb-5'
            width="250"
            ref={videoRef}
            onPlay={()=>setIsplaying(true)}
            onPause={()=> setIsplaying(false)}
        ><source 
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"/></video>
    </div>
  )
}

export default VideoPausePlay