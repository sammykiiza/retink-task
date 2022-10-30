import React from 'react'

function TextSection(props: { title: string, content1: string, content2: string }) {
    return (
        <div className='flex flex-col items-center'>
            <div className='text-[#7E1CFE] font-bold text-xl'>{props.title}</div>
            <div className='text-[#4D4D4D] text-sm text-justify'>
                {props.content1}<br />{props.content2}
            </div>
        </div>
    )
}

export default TextSection