import type { MetadataRoute } from "next"

import { blockCategories } from "@/config/registry"
import { getAllBlockStaticParams } from "@/lib/blocks"
import { getBlogPosts, getComponentDocs } from "@/features/doc/data/documents"

export const revalidate = false
export const dynamic = "force-static"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sanctrum-landing.vercel.app"

  const posts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }))

  const components = getComponentDocs().map((post) => ({
    url: `${baseUrl}/components/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }))

  const blockCategoryPages = blockCategories.map((category) => ({
    url: `${baseUrl}/blocks/${category.name}`,
    lastModified: new Date().toISOString(),
  }))

  const blocks = (await getAllBlockStaticParams()).map(
    ({ category, name }) => ({
      url: `${baseUrl}/blocks/${category}/${name}`,
      lastModified: new Date().toISOString(),
    })
  )

  const routes = [
    "",
    "/blog",
    "/components",
    "/components/showcase",
    "/blocks",
    "/sponsors",
    "/testimonials",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...posts, ...components, ...blockCategoryPages, ...blocks]
}
