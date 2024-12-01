
"use client";
import { useState, useEffect } from "react";
import ProductTableWithPagi from "@/components/Table/ProductTableWithPagi";
import { productColumns } from "@/components/Table/Columns";
import jsonData from "@/data/productData.json"; 
import CustomButton from "@/components/Button/CustomButton";
import DeleteConfirm from "@/components/DeletePopup/DeleteConfirm";
//import AddNewProduct from "@/components/Product/AddNewProduct"; // Component to add a new product
import { Product } from "@/components/Table/Columns";

const ProductDetailsTable = () => {
    const [isNewProductPopupOpen, setIsNewProductPopupOpen] = useState(false);
    const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [filteredData, setFilteredData] = useState<Product[]>([]);

    useEffect(() => {
        setFilteredData(jsonData?.productData || []);
    }, []);

    const handleDelete = (product: Product) => {
        if (product) {
            setSelectedProduct(product);
            setIsDeleteConfirmPopupOpen(true);
        }
    };

    return (
        <>
            <div className="flex justify-between mb-3 mt-6">
                <h5 className="flex items-center font-semibold font-inter ml-[120px]">Product Details</h5> {/* Added left margin here */}
                <CustomButton onClick={() => setIsNewProductPopupOpen(true)} buttonLabel="New Product" buttonClassName="text" />
            </div>


            <ProductTableWithPagi<Product>
                columns={productColumns}
                data={filteredData}
                itemsPerPage={15}
                className="custom-table-class"
                handleDelete={handleDelete}
                getRowId={(row) => row.productId}
                handleEdit={() => { }}
            />

            {/* {isNewProductPopupOpen && (
                <AddNewProduct
                    isDialogOpen={isNewProductPopupOpen}
                    setIsDialogOpen={setIsNewProductPopupOpen}
                />
            )} */}

            {isDeleteConfirmPopupOpen && selectedProduct && (
                <DeleteConfirm
                    element={selectedProduct?.productName}
                    onDelete={() => {
                        setFilteredData((prevData) =>
                            prevData.filter((product) => product.productId !== selectedProduct.productId)
                        );
                        setIsDeleteConfirmPopupOpen(false);
                    }}
                    onCancel={() => setIsDeleteConfirmPopupOpen(false)}
                    isVisible={isDeleteConfirmPopupOpen}
                />
            )}
        </>
    );
};

export default ProductDetailsTable;
