import React from 'react'
import { blogWriting, copyWriting, socialMedia } from '../../../assets'
import BlogArticleItem from './BlogArticleItem'

function BlogArticles() {
  return (
    <div className='flex flex-col items-center space-y-10'>
      <div className='flex-1 space-y-20 lg:space-y-4 lg:flex lg:space-x-2'>
        <BlogArticleItem
          image={blogWriting}
          title='Logos'
          content=' Have a unique & creative logo designed to express and represent your brand identity.'
        />
        <BlogArticleItem
          image={blogWriting}
          title='Blog Writing'
          content=' Write SEO enriched blog posts as long or short articles on any topic of your choice .'
        />
        <BlogArticleItem
          image={blogWriting}
          title='Animated Videos'
          content='Bring animated characters to life to keep your viewers engaged and  entertained.'
        />
      </div>
      <div className='flex-1 space-y-20 lg:space-y-4 lg:flex lg:space-x-2'>
        <BlogArticleItem
          image={blogWriting}
          title='Product Demo'
          content='Introduce your product to potential customers in a clear and creative video.'
        />
        <BlogArticleItem
          image={copyWriting}
          title='Copywriting'
          content='Have creative and compelling copies written to boost your product, brand, service or company.'
        />
        <BlogArticleItem
          image={socialMedia}
          title='Social Media Ads'
          content='Boost sales and awareness with tailor made ads from experts.'
        />
      </div>
    </div>
  )
}

export default BlogArticles