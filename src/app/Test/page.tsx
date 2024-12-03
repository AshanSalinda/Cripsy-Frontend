import React from 'react';
import BranchTable from '@/components/TestBranch/BranchTable';
import TextEditor from '@/components/TextEditor/TextEditor';

import WatchListProducts from '@/section/WatchListPageSection/WatchListProducts';

const Page = () => {


  
  return (
    <div>
      <h2 className="text-4xl text-red-600" >Test Page</h2>
       <BranchTable />
      <TextEditor className="w-4/6 mx-auto" />

      <WatchListProducts/>


     
    </div>
  );
};

export default Page;
