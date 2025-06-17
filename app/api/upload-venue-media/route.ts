import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        // Add logic to upload media to Supabase
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to upload media" }, { status: 500 });
    }
}
