import React from 'react';
import { SignUp } from '@clerk/nextjs'
import Image from 'next/image';
export default function Page() {
  return (
    <>
    <main className='w-full p-4 top-3 gap-4 flex items-center justify-center'>
      <section className='w-1/2'>

        <Image src="/sign-in-ill.svg" alt="sign-in illustration"  width={400} height={400}>
        </Image>

      </section>

      <section className='w-1/2 p-4'>
        
        <SignUp />
      </section>
    </main>

    </>
  )
}