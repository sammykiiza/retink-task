import React from 'react'

function BlogArticleItem(props: { image: any, title: string, content: string }) {
    return (
        <div className='w-56 h-48'>
            <img src={props.image} className="w-48" alt="" />
            <h1 className='text-[#393939]'>{props.title}</h1>
            <hr  className='w-16 border border-[#754DE8]'/>
            <div className='text-justify text-xs w-48 mt-6'>
            {props.content}
            </div>
        </div>
    )
}

export default BlogArticleItem