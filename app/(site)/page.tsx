import { getProjects } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {

  const projects = await getProjects()
  console.log({projects})

  return (
    <div>
      <h1 className='text-7xl text-center font-extrabold'><span className='bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent'>The Darjeeling Limited</span>!</h1>
      <p className='mt-8 text-xl text-gray-600'>The Whiteman family is a dysfunctional trio of estranged brothers on a spiritual journey through India, seeking to reconnect after their father&apos;s death.</p>
      <h2 className='mt-16 font-bold text-gray-700 text-3xl'>The Trio</h2>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map(({name,_id,mainImage,slug})=>{
          return (
            <Link 
              href={`/projects/${slug}`}
              key={_id}
              className=' border border-gray-500 rounded-lg p-3 hover:scale-105 transition-transform duration-300'
              >
              {mainImage && (
                <Image 
                  src={mainImage}
                  alt={name}
                  width={300}
                  height={100}
                  className='object-cover rounded-lg border border-gray-500 '
                />
              )}
              
              <div className='mt-2 text-center font-extrabold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent'>{name}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
