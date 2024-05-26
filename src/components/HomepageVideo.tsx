import { LoaderCircleIcon } from 'lucide-react'
import { useState } from 'react'

export default function HomepageVideo(): JSX.Element {
  const [loading, setLoading] = useState(true)

  return (
    <section className="mx-auto mb-6 mt-6 flex w-full max-w-6xl flex-col gap-4 p-8">
      <div className="relative h-0 pb-[62.5%]">
        {loading ? <VideoLoading /> : <></>}
        <iframe
          src="https://www.loom.com/embed/7ae2f244ef614bd4a4465669b230ccc8?sid=1d66ebcd-f6bc-43e3-baf3-6cc9e01b828e"
          frameBorder="0"
          allowFullScreen={true}
          className="absolute left-0 top-0 h-full w-full"
          onLoad={() => setLoading(false)}
        ></iframe>
      </div>

      <div>
        <a
          className="cursor-hand text-center"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.loom.com/share/7ae2f244ef614bd4a4465669b230ccc8"
        >
          <p>
            Konstantin Komelin - Sui dApp Starter - Sui Overflow - Watch Video
          </p>
        </a>
      </div>
    </section>
  )
}

const VideoLoading = () => {
  return (
    <div className="absolute left-0 top-0 mx-auto h-full w-full text-center">
      <LoaderCircleIcon className="h-12 w-12 animate-spin text-blue-600" />
    </div>
  )
}
