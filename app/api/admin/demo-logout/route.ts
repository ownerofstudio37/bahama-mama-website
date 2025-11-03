import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const res = NextResponse.json({ success: true })
    res.cookies.set('admin_session', '', { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 0 })
    return res
  } catch (error) {
    console.error('demo-logout error', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
