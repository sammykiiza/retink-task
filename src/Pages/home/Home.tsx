import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../../core/Layout/MainLayout'
import { auth } from '../../firebase'
import BlogArticles from './components/BlogArticles'
import Services from './components/Services'
import SignUpForm from './components/SignUpForm'
import TextSection from './components/TextSection'
import Video from './components/Video'

function Home() {
  const [  user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) navigate("/");
  });
  return (
    <MainLayout>
      <div className='w-screen space-y-14 py-8'>
        <Video />
        <Services />
        <TextSection
          title='Transform your Creation Process'
          content1='With a new approach toordering content, you can now stop juggling multiple'
          content2='documents and meetings and start publishing content faster and on demand'
        />

        <TextSection
          title='Activate your business growth with RetinkContent.'
          content1='Save time and maintain your brand identity within your budget range or'
          content2='sign up for affordable plans and still access multiple content services like:'
        />
        <BlogArticles />
        <SignUpForm />
      </div>
    </MainLayout>

  )
}

export default Home