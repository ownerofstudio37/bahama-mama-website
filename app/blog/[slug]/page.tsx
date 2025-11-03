import React from 'react'
import { notFound } from 'next/navigation'
import { mockBlogPosts } from '@/lib/mockBlogPosts'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

const isValidSlug = (s: string) => /^[a-z0-9-]{1,64}$/.test(s)

// Generate metadata dynamically based on blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  if (!isValidSlug(params.slug)) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found'
    }
  }
  
  const post = mockBlogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found'
    }
  }
  
  return {
    title: post.title,
    description: post.meta_description || post.excerpt,
    keywords: post.meta_keywords?.join(', ') || post.tags?.join(', ')
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  if (!isValidSlug(params.slug)) {
    notFound()
  }
  
  const post = mockBlogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero with Featured Image */}
      {post.featured_image && (
        <div className="relative h-96 w-full">
          <Image
            src={post.featured_image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="container mx-auto">
              <div className="flex gap-2 mb-3">
                {post.category && (
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex gap-4 text-sm">
                <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {!post.featured_image && (
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
              {post.category && <span>• {post.category}</span>}
            </div>
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 p-8 bg-primary-50 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-3">Visit Bahama Mama Today</h3>
          <p className="text-gray-700 mb-6">
            Ready to explore our products? Our knowledgeable staff is here to help you find exactly what you need.
          </p>
          <a
            href="/contact"
            className="inline-block btn-primary"
          >
            Contact Us
          </a>
        </div>
      </article>
    </div>
  )
}
