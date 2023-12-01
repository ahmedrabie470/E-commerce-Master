import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import image from '../../Assets/images/WhatsApp Image 2023-11-20 at 4.35.08 PM.jpeg'
export default function ProductDetails() {
  let params = useParams();

  function getAllSubCategoriesOnCategory(categoryId) {
    return axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`
    );
  }

  let { isLoading, data } = useQuery("categoryDetails", () =>
    getAllSubCategoriesOnCategory(params.id)
  );

  return (
    <>
      {isLoading ? (
        <>
          <div className="loading-page w-100 vh-100 d-flex justify-content-center align-items-center">
            <InfinitySpin width="200" color="rgb(24, 7, 109)" />
          </div>
        </>
      ) : (
        <>
          <div className="container text-main mt-5">
            <div>
              {data?.data.data.map((category) => {
                return <div key={category._id}>{
                  
                  <div  className="container  animate__animated  animate__fadeIn text-main mt-5">
            <div className="row align-items-center">
              <div className="col-md-3 ">
                <img
                  className="w-100"
                  src={image}
                  alt={data?.data.data.title}
                />
              </div>
              <div className="col-md-9 ">
                <h6>{category.name}</h6>
                <h1 className="h5">{category.slug}</h1>
             <p>Soft and sustainable polyester fabric Elastic waist for comfortable fit Multiple pockets for quick storage Wash according to care label instructions Nike signature branding detail</p>
              
      
                
              </div>
            </div>
          </div>
                }</div>;
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
