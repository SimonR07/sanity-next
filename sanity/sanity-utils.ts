import { createClient, groq } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

export async function getProjects() {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  })

    return client.fetch(
      groq`*[ _type == "project"] | order(_createdAt asc){
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`

    )

}
