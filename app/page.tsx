import { getProjects } from '@/sanity/sanity-utils'

export default async function Home() {

  const projects = await getProjects()
  console.log(projects)

  return (
    <>
    {projects.map(({name,_id})=>{
      return (
        <div key={_id}>
          <h2>{name}</h2>
        </div>
      )
    })}
    </>
  )
}
