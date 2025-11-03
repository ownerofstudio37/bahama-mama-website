import { NextResponse } from 'next/server'

// Simple scripted responder for demo mode
// - Extracts basic intents (service, email, phone, budget, date)
// - Returns a friendly, on-brand reply and detected info for the chatbot UI
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const message: string = String(body?.message ?? '')

    // Lightweight NER/heuristics
    const emailMatch = message.match(/[\w.+-]+@[\w-]+\.[\w.-]+/i)
    const phoneMatch = message.match(/\b(\+?1[-.\s]?)?(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})\b/)
    const budgetMatch = message.match(/\$?\s?(under|over|between)?\s?\$?([\d,]+)(?:\s?-\s?\$?([\d,]+))?/i)
    const dateMatch = message.match(/\b(\d{4}-\d{2}-\d{2}|\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4})\b/)

    let service: string | undefined
    const lowered = message.toLowerCase()
    if (/wedding|bride|groom/.test(lowered)) service = 'wedding'
    else if (/portrait|headshot|family/.test(lowered)) service = 'portrait'
    else if (/event|party|conference/.test(lowered)) service = 'event'
    else if (/commercial|product|brand|catalog/.test(lowered)) service = 'commercial'

    const detectedInfo: Record<string, string> = {}
    if (service) detectedInfo.service = service
    if (emailMatch) detectedInfo.email = emailMatch[0]
    if (phoneMatch) detectedInfo.phone = phoneMatch[0]
    if (budgetMatch) {
      const [, , lo, hi] = budgetMatch
      detectedInfo.budget = hi ? `$${lo} - $${hi}` : `$${lo}`
    }
    if (dateMatch) detectedInfo.eventDate = dateMatch[0]

    // Scripted friendly response (keep short and actionable)
    let response = "Thanks for reaching out!"
    if (service) {
      response += ` We can help with ${service} sessions.`
    } else {
      response += " We offer wedding, portrait, event, and commercial sessions."
    }

    if (detectedInfo.email || detectedInfo.phone) {
      response += " I captured your contact details."
    } else {
      response += " What's the best email to send package details?"
    }

    if (detectedInfo.eventDate) {
      response += ` I see a date around ${detectedInfo.eventDate}.`
    }

    response += " Would you like a quick quote or to book a 10‑min consult?"

    return NextResponse.json({ success: true, response, detectedInfo })
  } catch (error) {
    console.error('Demo chat/respond error:', error)
    return NextResponse.json({ success: false, response: "I'm here to help. Could you share your email so we can follow up with details?" })
  }
}
