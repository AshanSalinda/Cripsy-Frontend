import React from 'react'
import WatchlistCard from '@/components/Product/WatchlistCard';
import data from '@/data/productIem.json';

const WatchListProducts = () => {
  return (
    <div>
       
      {data.SuperDeals.map((productData) => (
        <div className="px-10 py-5">
          <WatchlistCard
            key={productData.productId}
            imageSrc={productData.imageSrc}
            title={productData.title}
            description={productData.description}
            availableItems={productData.availableItems}
            rating={productData.rating}
            reviews={productData.reviews}
            price={productData.price}
            
            
          />
           </div>
        ))}
    </div>
  )
}

export default WatchListProducts