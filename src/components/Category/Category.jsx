
import axios from "axios";
import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export default function Categories() {
  let [ search , setSearch] = useState('')

  let {isLoading , data } = useQuery("featuredCategories", getAllCategories);


   function getAllCategories() {
   return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }

  return (
    <>
 
      {isLoading ? (
        
        <div className="loading-page w-100 vh-100  d-flex justify-content-center align-items-center ">
          <InfinitySpin width="200" color="rgb(24, 7, 109)" />
        </div>
        
      ) : (
        <> 
        <div className="form-outline d-flex justify-content-center align-items-center mt-5 " data-mdb-input-init>
        <input onChange={(e)=>setSearch(e.target.value)}
          type="search"
          id="form1"
          className="form-control rounded-5 w-50"
          placeholder="Search Here"
          aria-label="Search"
        />
            <i className="fa-solid fa-magnifying-glass mx-2"></i>{" "}
      </div>
        <div className="container animate__animated  animate__fadeIn mt-5 p-2 ">
          <div className="row ">
            {data?.data.data.filter((category)=>{
              return search.toLowerCase() === '' ?
              category : category.name.toLowerCase().includes(search.toLowerCase())
            }).map((category) =>( 
              <div key={category._id} className="container category text-center col-md-3" width={90}>
                 <Link  to={`/SubCategories/${category._id}`}>
                 <div
                   className="row cursor-pointer p-2 "
                   >
                   <img
                     className="animate__animated  animate__fadeIn"
                     width={50}
                     height={330}
                     src={category.image}
                     alt={category.title}
                   />
                   <div className="text-main  font-sm fw-bolder mt-2">
                     {category.name}
                   </div>
                
                 </div>

             </Link>
             <Link to={`/SubCategories/${category._id}`}  className="btn bg-main text-light mb-2">Show All </Link>
 
               </div>
            ))};
          </div>
        </div>
        </>
      )}




      
    </>
  );
}
