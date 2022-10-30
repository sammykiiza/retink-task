import React from 'react'
import { videoPoster } from '../../../assets'

function Video() {
    return (
        <div className='flex flex-col items-center'>
            <div className='uppercase'>explainer video</div>
            <video src="" poster={videoPoster} className="rounded-md w-30 h-60"></video>
        </div>
    )
}

export default Video