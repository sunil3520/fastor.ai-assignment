import React from 'react'
import { useSelector } from 'react-redux';

let arr = ["https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=",
"https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
"https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff",
"https://machinelearningmastery.com/wp-content/uploads/2018/07/thomas-lipke-oIuDXlOJSiE-unsplash-scaled.jpg"
]



const SliderCard = () => {
const products = useSelector((store)=>store.ProductReducer?.products)

  return (
    <div className='p-3'>
      <h1 className='text-3xl font-bold mb-5'>Your taste</h1>
      <div className='flex gap-4 overflow-x-scroll no-scrollbar ' >
        {products?.map((imageUrl, i) => (
          <div key={i} style={{ flex: '0 0  auto', scrollSnapAlign: 'start' }}>
            <div className="flex flex-col  rounded-[16px] border-2 overflow-hidden">
              <img src={imageUrl?.images[0]?.url} alt={`Imag ${i + 1}`} className="w-[150px] h-48 object-cover rounded-md" />
              <h2 className="w-[150px] font-bold">Nike Baker's'</h2>
              <p className='w-[150px] text-[#838BA1]'>Connaught Place, New Delhi</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderCard