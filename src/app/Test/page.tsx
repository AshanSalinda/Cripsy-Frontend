import React from 'react';
import BranchTable from '@/components/TestBranch/BranchTable';

import WatchListProducts from '@/section/WatchListPageSection/WatchListProducts';
import { RefundRequestSection } from '@/section/RefundRequestSection/RefundRequestSection';
import Stepper from '@/components/Stepper/Stepper';

const Page = () => {


  
  return (
    <div>
      <h2 className="text-4xl text-red-600" >Test Page</h2>
       {/* <BranchTable />
      <TextEditor className="w-4/6 mx-auto" /> */}

      {/* <WatchListProducts/> */}
      {/* <RefundRequestSection/> */}

        <Stepper/>

     
    </div>
  );
};

export default Page;
