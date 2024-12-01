import React from 'react';
import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button/CustomButton';
import RatingStars from '@/components/Product/RatingStar';


interface RatingFormType {
    isRateFormVisible: boolean;
    setIsRateFormVisible: (isVisible: boolean) => void;
}

const RatingForm: React.FC<RatingFormType> = ({isRateFormVisible, setIsRateFormVisible}) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const rating = ((e.target as HTMLFormElement).elements.namedItem("rating stars") as HTMLInputElement)?.value;
        const action = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement)?.value;

        if (action === "cancel") {
            setIsRateFormVisible(false)
        } else if (action === "submit") {
            console.log("Submit clicked", rating);
            setIsRateFormVisible(false)
        }
    }

    return(
        <Modal isVisible={isRateFormVisible} setVisible={setIsRateFormVisible}>
            <div className="flex flex-col items-center p-2">
                <h3 className="font-semibold">Add Your Review</h3>
                <form onSubmit={handleSubmit} className="flex flex-col items-center w-72 px-4 mt-5">
                   <RatingStars value={5} readOnly={false} />
                    <textarea placeholder="Write your review here..." className="w-full h-52 mt-5 p-3 border outline-none border-neutral-300" />
                    <div className='flex justify-between mt-8 w-56'>
                        <Button value='cancel' buttonLabel="Close"  buttonClassName="w-24" variant="outline" />
                        <Button value='submit' buttonLabel="Submit" buttonClassName="w-24" />
                    </div>
                </form>
            </div>
        </Modal>
    )
};

export default RatingForm;