import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
    }).format(price);
}

export function generateTimeSlots(
    startTime: string = "09:00",
    endTime: string = "22:00",
    intervalMinutes: number = 60,
): string[] {
    const slots: string[] = [];
    let current = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);

    while (current < end) {
        slots.push(
            current.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            }),
        );
        current = new Date(current.getTime() + intervalMinutes * 60000);
    }

    return slots;
}
