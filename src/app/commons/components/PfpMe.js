import Image from 'next/image'

export default function PfpMe() {
  return (
    <div className="rounded-full mt-6 md:mt-16 ring-[1px] ring-neutral-300 dark:ring-neutral-700 border-8 border-inherit dark:border-black shadow-2xl ">
            <Image
              src="/me.jpeg"
              alt="Pfp"
              width="80"
              height="80"
              priority
              quality={100}
              className="rounded-full ring-[1px] ring-neutral-300 dark:ring-neutral-700 hover:scale-105 transition-all duration-300 ease-in-out"
              id="pfp"
            />
          </div>
  )
}