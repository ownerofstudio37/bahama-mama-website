'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
	{
		id: 1,
		name: 'Marcus T.',
		service: 'CBD Products',
		rating: 5,
		text: 'Best CBD selection in Houston! The staff is incredibly knowledgeable and helped me find the perfect products for my needs. Quality is top-notch and prices are fair.',
		image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
	},
	{
		id: 2,
		name: 'Jessica R.',
		service: 'Vape Products',
		rating: 5,
		text: 'Bahama Mama has everything! Huge selection of disposables and mods, plus the staff actually knows what they\'re talking about. My go-to shop for all vape needs.',
		image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
	},
	{
		id: 3,
		name: 'David L.',
		service: 'Kratom & Accessories',
		rating: 5,
		text: 'Quality kratom at great prices, plus an amazing selection of water pipes and smoking accessories. Clean store, friendly staff, and they always have what I need.',
		image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
	}
]

export default function Testimonials() {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about shopping at Bahama Mama.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-gray-50 p-8 rounded-lg relative"
						>
							<Quote className="h-8 w-8 text-primary-500 mb-4" />
							
							<div className="flex mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
								))}
							</div>
							
							<p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
							
							<div className="flex items-center">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-12 h-12 rounded-full mr-4 object-cover"
								/>
								<div>
									<h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
									<p className="text-sm text-gray-600">{testimonial.service}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
