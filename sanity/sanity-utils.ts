import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { HomePage } from "@/types/HomePage";



export async function getProjects(): Promise<Project[]> {

    return createClient(clientConfig).fetch(
      groq`*[ _type == "project"] | order(_createdAt asc){
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        "detailImage": detailImage.asset->url,
        url,
        content
      }`

    )

}

export async function getProject(slug: string): Promise<Project> {
  
    return createClient(clientConfig).fetch(
      groq`*[ _type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        "detailImage": detailImage.asset->url,
        url,
        content
      }`,
      { slug }

    )
}


export async function getPages(): Promise<Page[]>{
  return createClient(clientConfig).fetch(
    groq`*[ _type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
  )
}

export async function getPage(slug: string): Promise<Page>{
  return createClient(clientConfig).fetch(
    groq`*[ _type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}

export async function getHomePage(): Promise<HomePage> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homePage"][0]{
      _id,
      _createdAt,
      mainTitle,
      description,
      projectsSectionTitle,
      projects[]->{
        _id,
        _createdAt,
        name,
        "mainImage": mainImage.asset->url,
        "slug": slug.current
      }
    }`
  );
}