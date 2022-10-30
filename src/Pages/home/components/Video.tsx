import React from 'react'
import { videoPoster } from '../../../assets'

function Video() {
    return (
        <div className='flex flex-col items-center space-y-2 px-6 lg:px-0'>
            <div className='uppercase text-[#7E1CFE] font-bold'>explainer video</div>
            <video src="" poster={videoPoster} className="rounded-md h-80"></video>
        </div>
    )
}

export default Video