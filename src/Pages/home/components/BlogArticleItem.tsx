import React from 'react'

function BlogArticleItem(props: { image: any, title: string, content: string }) {
    return (
        <div className='w-full lg:w-56 h-48'>
            <a href="!#">
                <img src={props.image} className="w-full lg:w-48 hover:w-52 ease-linear transition-all duration-150" alt="" />
                <h1 className='text-[#393939] pt-3 lg:mt-0 hover:text-black ease-linear transition-all duration-150'>{props.title}</h1>
                <hr className='w-16 border border-[#754DE8] hover:w-20 ease-linear transition-all duration-150' />
                <div className='text-justify text-xs w-48 mt-6'>
                    {props.content}
                </div>
            </a>
        </div>
    )
}

export default BlogArticleItem