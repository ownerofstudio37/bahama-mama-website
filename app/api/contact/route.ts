import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // For demo purposes, just log the contact form submission
    console.log('Demo contact form submission:', data)
    
    // In a real app, you would save this to a database
    // For demo, we just return success
    return NextResponse.json({
      message: 'Thank you for your inquiry! This is a demo submission.',
      success: true
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}