import Link from 'next/link'
import Image from 'next/image'
import { generateSEOMetadata } from '@/lib/seo-helpers'
import { mockBlogPosts } from '@/lib/mockBlogPosts'

export const metadata = generateSEOMetadata({
  title: 'Smoke Shop Blog - Tips & Insights from Bahama Mama Texas',
  description: 'Read the latest guides on Delta-8, kratom, vaping, and more from Bahama Mama\'s expert team. Your trusted source for smoke shop education in Texas.',
  keywords: [
    'smoke shop blog',
    'Delta-8 tips',
    'kratom guide',
    'vaping advice',
    'cannabinoid education',
    'Bahama Mama blog',
    'smoke shop Texas'
  ],
  canonicalUrl: 'https://bahama-mama.com/blog'
})

export default async function BlogPage() {
  // Demo mode: use mock blog posts
  const posts = mockBlogPosts
  const error = null

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-3">Bahama Mama Blog</h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Your trusted source for cannabinoid education, vaping tips, and smoke shop insights.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {error ? (
          <div className="text-center py-12">
            <p className="text-red-600">Error loading blog posts</p>
          </div>
        ) : !posts || posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                {post.featured_image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.featured_image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                  )}
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.author || 'Admin'}</span>
                    <span>
                      {post.published_at 
                        ? new Date(post.published_at).toLocaleDateString() 
                        : new Date(post.created_at || Date.now()).toLocaleDateString()
                      }
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
