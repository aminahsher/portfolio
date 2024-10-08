import Image from 'next/image'
import React from 'react'

interface propsType{
  title:string,
  description:string,
  img:string,
  tags:string[]

}

const Card: React.FC<propsType>=({title, description,img,tags})=> {
  return (
    <div className='border border-accent w-[300px] sm:w-[350px]'>
      <div>
        <Image className='w-[300px] sm:w-[350px] h-auto'
        src={img}
        width={350}
        height={350}
        alt={title}
        />
      </div>
      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{description}</div>
        <div>
          {tags.map((el)=>(
            <div className='tags' key={el}>
              {el}

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Card
