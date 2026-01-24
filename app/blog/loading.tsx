// import { Skeleton } from "@/components/ui/skeleton"

// export default function Loading() {
//   return (
//     <div className="flex w-full max-w-xs flex-col gap-2">
//       <Skeleton className="h-4 w-full" />
//       <Skeleton className="h-4 w-full" />
//       <Skeleton className="h-4 w-3/4" />
//     </div>
//   )
// }
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex justify-center items-center gap-4 ">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

