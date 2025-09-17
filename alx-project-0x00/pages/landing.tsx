import React from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'

const landing:React.FC = () => {
  return (
    <div>


      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

       <div className="flex gap-4">
        <Button title="Small Rounded-sm" styles="text-sm rounded-sm px-2 py-1" />
        <Button title="Small rounded-lg" styles="text-sm rounded-md px-2 py-1" />
        <Button
          title="Small Rounded-full"
          styles="text-sm rounded-full px-2 py-1"
        />
      </div>
    </div>

  )
}

export default landing