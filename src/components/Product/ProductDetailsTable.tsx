"use client";
import { useState, useEffect } from "react";
import TableWithPagi from "@/components/Table/TableWithPagi"; // Replacing ProductTableWithPagi with TableWithPagi for consistency
import { productColumns } from "@/components/Table/Columns";
import jsonData from "@/data/productData.json";
import CustomButton from "@/components/Button/CustomButton";
import DeleteConfirm from "@/components/DeletePopup/DeleteConfirm";
// import AddNewProduct from "@/components/Product/AddNewProduct"; // Component to add a new product
import { Product } from "@/components/Table/Columns";
import { Separator } from "@radix-ui/react-separator";
import {useRouter} from "next/navigation";

const ProductDetailsTable = () => {
    const [isNewProductPopupOpen, setIsNewProductPopupOpen] = useState(false);
    const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [filteredData, setFilteredData] = useState<Product[]>([]);
    const router = useRouter();

    useEffect(() => {
        setFilteredData(jsonData?.productData || []);
    }, []);

    const handleDelete = (product: Product) => {
        if (product) {
            setSelectedProduct(product);
            setIsDeleteConfirmPopupOpen(true);
        }
    };

    const handleNewProduct = () => {
        // Navigate to the new product page
        router.push("/admin/addProduct"); // Replace '/new-product' with the actual route
    };




    return (
        <>
            <div className="flex justify-between mb-3 mt-6">
                <h5 className="flex items-center text-lg font-semibold font-inter">Product Details</h5>
                <CustomButton
                    onClick={handleNewProduct}
                    buttonLabel="New Product"
                    buttonClassName="text"
                />
            </div>

            <TableWithPagi<Product>
                columns={productColumns}
                data={filteredData}
                itemsPerPage={15}
                className="custom-table-class"
                handleDelete={handleDelete}
                getRowId={(row) => row.productId}
                handleEdit={() => {}}
            />

            <Separator orientation="vertical" className="mt-4 mb-4 border-2 bg-black" />

            <Separator
                className="SeparatorRoot h-5"
                decorative
                orientation="vertical"
                style={{ margin: "0 15px" }}
            />

            {/* Uncomment and implement AddNewProduct as needed */}
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
