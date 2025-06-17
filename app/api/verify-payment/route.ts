import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // Add logic to verify Razorpay payment
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to verify payment" }, { status: 500 });
    }
}
