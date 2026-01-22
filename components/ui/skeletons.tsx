import { Skeleton } from "@/components/ui/skeleton"

export function ProjectCardSkeleton() {
    return (
        <div className="bg-muted/30 rounded-2xl border border-border overflow-hidden">
            {/* Image skeleton */}
            <Skeleton className="h-48 w-full rounded-none" />

            {/* Content skeleton */}
            <div className="p-6 space-y-4">
                {/* Tag */}
                <Skeleton className="h-4 w-20" />

                {/* Title */}
                <Skeleton className="h-8 w-3/4" />

                {/* Description lines */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                </div>

                {/* Tags */}
                <div className="flex gap-2 pt-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-14 rounded-full" />
                </div>
            </div>
        </div>
    )
}

export function PortfolioSkeleton() {
    return (
        <div className="space-y-8 animate-fade-in">
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
        </div>
    )
}

export function PageLoadingSpinner() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 border-4 border-muted-foreground/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-transparent border-t-steel-blue rounded-full animate-spin" />
                </div>
                <p className="text-sm text-muted-foreground animate-pulse">Loading...</p>
            </div>
        </div>
    )
}

export function CategorySkeleton() {
    return (
        <div className="space-y-2">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-24" />
            <Skeleton className="h-12 w-36" />
            <Skeleton className="h-12 w-48" />
        </div>
    )
}
