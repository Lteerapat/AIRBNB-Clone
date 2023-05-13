import { useParams } from "react-router-dom";

const BookingPage = () => {
    const {id} = useParams()
    
    return (
        <>
            single boog: {id}
        </>
    );
};

export default BookingPage;