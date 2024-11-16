import React from 'react';

interface DescriptionType {
    description: string,
}

const Description: React.FC<DescriptionType> = ({description}) => {
    const isHTML = /<[a-z][\s\S]*>/i.test(description);

    return (
        <div className="px-3 py-7 md:p-7 box-border">
            <h3 className="font-medium">Product Details</h3>
            {isHTML ? (
                <div className="m-3" dangerouslySetInnerHTML={{ __html: description }} />
            ) : (
                <div className="font-light m-3 text-justify">{description}</div>
            )}
        </div>
    );
};

export default Description;