import React from 'react'
import AddProductForm from "@/section/AddProductForm/AddProductForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {AlertCircle} from "lucide-react";


const page = () => {
    return (
        <div>
            <AddProductForm/>
        </div>
    )
}

export default page;