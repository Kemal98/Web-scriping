import React from 'react'
import Card from './Card'

const Cards = ({product}:any) => {
  return (
    <div className='grid gap-2 md:grid-cols-4 xl:grid-cols-5 grid-cols-1'>
    {product.map((pro:any, index: number) => (
  <div       
  key={index}
  className='group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'>
  <a className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl' href='#'>
    <img
      className='peer absolute top-0 right-0 h-full w-full object-cover'
      src={pro.image}
      alt={pro.title}
    />
    <img
      className='peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0'
      src='https://brightdata.com/wp-content/uploads/2022/10/How-to-scrape-customer-reviews-on-different-websites.svg'
      alt='product image'
    />
    <svg
      className='pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      role='img'
      width='1em'
      height='1em'
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 32 32'
    >
      <path
        fill='currentColor'
        d='M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z'
      />
    </svg>
  </a>
  <div className='mt-4 px-5 pb-5'>
    <a href='#'>
      <h5 className='text-sm tracking-tight text-[#007185]'>{pro.title}</h5>
      <h5 className='text-sm tracking-tight text-[#007185]'>{pro.category}</h5>
    </a>
    <div className='mt-2 mb-5 flex items-center justify-between'>
      <p>
        <span className='text-3xl font-bold text-slate-900'>
          {pro?.currency}
          {pro?.currentPrice}
        </span>
        <span className='text-xs  text-slate-900 line-through'>
          {pro?.currency}
          {pro?.originalPrice}
        </span>
      </p>
    </div>
    <p className='text-slate-700'>{pro?.reviewsCount} reviews</p>
    <div className='flex items-center'>
      <span className='text-slate-500'>{pro?.stars} stars</span>
      <span className='mx-1'>&middot;</span>
      <span className='text-slate-500'>
        {pro?.discountRate}% off
      </span>
    </div>
    <p className='text-[#007600]'>
      {pro?.isOutOfStock ? 'Out of Stock' : 'In Stock'}
    </p>
  </div>
</div>        
    ))}
  </div>
)
}

export default Cards