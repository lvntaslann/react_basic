import { useLocation, useParams } from "react-router-dom";


const Detail = () => {
    const { id } = useParams();

    return (
      <>
        <div>
          detail page
        </div>
      </>
    );
};

export default Detail;
