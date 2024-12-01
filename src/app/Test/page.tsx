import React from 'react';
import BranchTable from '@/components/TestBranch/BranchTable';
import TextEditor from '@/components/TextEditor/TextEditor';
import WatchlistCard from '@/components/Product/WatchlistCard';
import data from '@/data/data.json';

const Page = () => {


  
  return (
    <div>
      <h2 className="text-4xl text-red-600" >Test Page</h2>
      {/* <BranchTable /> */}
      <TextEditor className="w-4/6 mx-auto" />


      
      {data.productData.map((productData) => (
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
  );
};

export default Page;
