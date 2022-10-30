import React from 'react'

function ServiceCard(props:{ image?: any, title1?: string, title2?: string, content?: string }) {
    return (
        <div className='flex flex-col justify-center items-center px-6 shadow-custom rounded-xl w-full lg:w-60 h-72 space-y-3'>
            <img src={props.image} width="50px" height="50px" alt="artificial-intelligence" />
            <div className='font-bold text-sm'>
                <span>{props.title1}</span><br />
                <span>{props.title2}</span>
            </div>
            <div className='text-xs text-justify'>
                {props.content}
            </div>
        </div>
    )
}

export default ServiceCard