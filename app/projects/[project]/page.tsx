import { getProject } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = {
  params: {project: string}
}


export default async function Project({params}: Props) {

  const slug = params.project
  const project = await getProject(slug)

  const imageUrl = project.detailImage || project.mainImage;
  const imageAlt = project.name;

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent font-extrabold text-3xl">{project.name}</h1>
        <a 
          href={project.url}
          title='View Project'
          target='_blank'
          rel='noopener noreferrer'
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-orange-300 hover:text-white transition"
          >
            View Bio
          </a>
      </header>
        <div className="text-lg text-gray-700 mt-5">
          <PortableText value={project.content} />
        </div>
        {imageUrl && (
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={1280}
          height={720} 
          className="mt-10 border-2 border-gray-400 object-cover rounded"
        />
      )}
    </div>
  )

}
