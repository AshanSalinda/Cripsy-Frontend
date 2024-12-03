import React from 'react'
import Dropdown from "@/components/Dropdown/Dropdown";


export const orderStateForm = () => {

    const options = [
        {label: "Start", value: "Start"},
        {label: "Start", value: "Start"},
        {label: "Start", value: "Start"}
    ]

    

  return (
    <div>
        <div className="space-y-4">
            {/* Row 1: Branch Name and Address */}
            <div className="flex flex-row space-x-4 mb-4">
                <div className="w-1/2">
                <Dropdown
                            options={options}
                            placeholder="Select Category"
                            onChange={(value) => {value}}
                        />

                </div>
                </div>
                </div>
    </div>
  )
}
