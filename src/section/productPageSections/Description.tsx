import React from 'react';

interface DescriptionType {
    description: string,
}

const Description: React.FC<DescriptionType> = ({description}) => {
    const styledDescription = description?.replace(/<p>/g, '<p style="min-height: 20px;">');

    return (
        <div className="px-3 py-7 md:p-7 box-border">
            <h3 className="font-medium">Product Details</h3>
            <div 
                className="font-light m-3 text-justify" 
                dangerouslySetInnerHTML={{ __html: styledDescription }} 
            />
        </div>
    );
};

export default Description;