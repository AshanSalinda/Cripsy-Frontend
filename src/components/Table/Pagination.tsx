'use client';

import React, { useState, useEffect } from "react"
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
} from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage = 1,
    totalPages,
    onPageChange,
}) => {
    const [visibleRange, setVisibleRange] = useState<number[]>([1, 5]);

    useEffect(() => {
        if (currentPage - 2 < 1) {
            setVisibleRange([1, 5])
        } else if (currentPage + 2 > totalPages) {
            setVisibleRange([totalPages - 4, totalPages])
        } else {
            setVisibleRange([currentPage - 2, currentPage + 2])
        }
    }, [currentPage, totalPages]);

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return
        onPageChange(newPage)
    }

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <div className="flex justify-end mt-4" id="pagination">
            <div className="flex items-center space-x-2 overflow-x-auto">
                <Button
                    variant="outline"
                    className="px-2 py-1 bg-gray-100 border-stone-300"
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                    aria-label="First Page"
                >
                    <DoubleArrowLeftIcon className="w-4 h-4 text-stone-500" />
                </Button>
                <Button
                    variant="outline"
                    className="px-2 py-1 bg-gray-100  border-stone-300"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    aria-label="Previous Page"
                >
                    <ChevronLeftIcon className="w-4 h-4 text-stone-500" />
                </Button>
                {pageNumbers.slice(visibleRange[0] - 1, visibleRange[1]).map((pageNumber) => {
                    const isCurrentPage = pageNumber === currentPage
                    return (
                        <button
                            key={pageNumber}
                            className={cn(
                                "rounded-lg py-1 w-10",
                                isCurrentPage
                                    ? "bg-carnation-550 text-white scale-105 transition-all duration-300"
                                    : "bg-white text-neutral-500 hover:bg-neutral-200 scale-100"
                            )}
                            onClick={() => handlePageChange(pageNumber)}
                            aria-current={isCurrentPage ? "page" : undefined}
                        >
                            {pageNumber}
                        </button>
                    )
                })}
                <Button
                    variant="outline"
                    className="px-2 py-1 bg-gray-100  border-stone-300"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    aria-label="Next Page"
                >
                    <ChevronRightIcon className="w-4 h-4 text-stone-500" />
                </Button>
                <Button
                    variant="outline"
                    className="px-2 py-1 bg-gray-100  border-stone-300"
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    aria-label="Last Page"
                >
                    <DoubleArrowRightIcon className="w-4 h-4 text-stone-500" />
                </Button>
            </div>
        </div>
    )
}

export default Pagination
