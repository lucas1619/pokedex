import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    return (
      <div>
        <h1>Detail from {id} pokemon!</h1>
      </div>
    );
  }
  
  export { Detail }; 