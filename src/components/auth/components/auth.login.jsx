'use client'
import { Input, Button } from '@nextui-org/react'

export const AuthLogin = () => {
  return (
    <div className='flex justify-center items-center m-auto bg-red-500'>
      <div className='w-[320px] space-y-2'>
        <Input placeholder='email'/>
        <Input placeholder='password'/>
        <Button>Login</Button>
      </div>
    </div>
  )
}
