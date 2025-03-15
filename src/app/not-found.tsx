import Image from 'next/image'

export const metadata = {
  title: "Page Not Found",
}
 
export default function NotFound() {
  return (
    <div className='flex items-center justify-center min-h-screen px-2 w-full'>
        <div className='mx-auto py-4 flex flex-col justify-center
        iterms-center gap-4'>
      <h2 className='text-2xl'>404 Page not Found</h2>
        <Image
            src="/images/not-found.png"
            alt="404"
            width={300}
            height={300}
            className='m-0 rounded-xl'
        />
        </div>
    </div>
  )
}