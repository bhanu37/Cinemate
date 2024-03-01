import React from 'react'
import pageNotFound from '../assets/pageNotFound.jpeg'
import { Link } from 'react-router-dom'
import { Button } from '../components'

export const PageNotFound = () => {
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, Oops!</p>
          <div className="max-w-lg">
            <img className='rounded' src={pageNotFound} alt="" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button className='w-64 text-xl text-white bg-red-900 rounded-lg p-2' children={"Back to Home"}/>
          </Link>
        </div>
      </section>
    </main>
  )
}
