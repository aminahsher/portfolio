import Image from 'next/image';
import React from 'react';

interface PropsType {
  title: string;
  description: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, description, img, tags }) => {
  return (
    <div className='border border-gray-700 rounded-xl shadow-lg w-[320px] sm:w-[380px] bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
      <div>
        <Image 
          className='w-full h-56 object-cover' 
          src={img} 
          width={380} 
          height={250} 
          alt={title} 
        />
      </div>
      <div className='p-5 space-y-4'>
        <h3 className='text-3xl font-bold text-blue-400 tracking-wide'>{title}</h3>
        <p className='text-gray-300 text-sm leading-relaxed'>{description}</p>
        <div className='flex flex-wrap gap-2 mt-3'>
          {tags.map((el) => (
            <span 
              key={el} 
              className='bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md hover:bg-blue-600 transition-all'
            >
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
