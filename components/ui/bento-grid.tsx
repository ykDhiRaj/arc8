import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoGridProps {
    className?: string;
    children: ReactNode;
}

interface BentoItemProps {
    className?: string;
    title?: string;
    description?: string;
    header?: ReactNode;
    icon?: ReactNode;
    children?: ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
    return (
        <div className={cn(
            "grid grid-cols-bento-mobile md:grid-cols-bento-desktop gap-bento-gap",
            className
        )}>
            {children}
        </div>
    );
}

export function BentoItem({
    className,
    title,
    description,
    header,
    icon,
    children,
}: BentoItemProps) {
    return (
        <div className={cn(
            "group/bento relative flex flex-col overflow-hidden rounded-xl border bg-background p-6 shadow-md transition-all hover:shadow-xl",
            className
        )}>
            {header}
            <div className="flex items-center gap-4">
                {icon && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background/50 transition-colors group-hover/bento:bg-accent/10">
                        {icon}
                    </div>
                )}
                {(title || description) && (
                    <div className="space-y-1">
                        {title && (
                            <h3 className="font-pixel text-sm text-foreground">
                                {title}
                            </h3>
                        )}
                        {description && (
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
                        )}
                    </div>
                )}
            </div>
            {children && (
                <div className="mt-4">{children}</div>
            )}
        </div>
    );
}
