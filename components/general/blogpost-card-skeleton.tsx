export default function BlogPostCardSkeleton() {
    return (
      <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md animate-pulse">
        {/* Image Placeholder */}
        <div className="relative h-48 w-full bg-gray-300 animate-pulse"></div>
  
        <div className="p-4">
          {/* Title Placeholder */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
  
          {/* Content Placeholder */}
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
  
          {/* Author and Date Placeholder */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* Author Image Placeholder */}
              <div className="size-8 bg-gray-300 rounded-full"></div>
  
              {/* Author Name Placeholder */}
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
  
            {/* Date Placeholder */}
            <div className="h-4 bg-gray-200 rounded w-20"></div>
          </div>
        </div>
      </div>
    );
  }