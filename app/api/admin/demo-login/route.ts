import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const email = String(body?.email ?? '')
    const code = String(body?.code ?? '')

    // In demo, accept any input; optionally require specific code
    const ok = !code || code.toLowerCase() === 'demo'
    if (!ok) {
      return NextResponse.json({ success: false, error: 'invalid_code' }, { status: 401 })
    }

    // Set a simple demo cookie
    const res = NextResponse.json({ success: true })
    res.cookies.set('admin_session', `demo:${email || 'guest'}`, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 4, // 4 hours
    })
    return res
  } catch (error) {
    console.error('demo-login error', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
