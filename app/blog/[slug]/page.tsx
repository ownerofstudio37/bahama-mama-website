import React from 'react'
import { notFound } from 'next/navigation'

const isValidSlug = (s: string) => /^[a-z0-9-]{1,64}$/.test(s)

// Generate metadata dynamically based on blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Demo mode: no blog posts available
  if (!isValidSlug(params.slug)) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found'
    }
  }
  
  return {
    title: 'Post Not Found',
    description: 'The requested blog post could not be found'
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Demo mode: no blog posts available
  if (!isValidSlug(params.slug)) {
    notFound()
  }
  
  // All blog posts return not found in demo mode
  notFound()
}
