import { Suspense } from 'react'
import { VideoComponent } from '@/app/movie/[id]/page'
 
export default function Video() {
  return (
    <section>
      <Suspense fallback={<p>Loading video...</p>}>
        <VideoComponent />
      </Suspense>
      {/* Other content of the page */}
    </section>
  )
}