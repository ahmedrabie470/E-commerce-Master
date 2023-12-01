import axios from "axios";
import { createContext, useEffect } from "react";



export let CategoryContext = createContext()

 function getCategory() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
   }

function getAllSubCategoriesOnCategory(id) {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
      .then((response) => response)
      .catch((error) => error);
  }
  
export default function CategoryContextProvider (props){
 
     useEffect(()=>{getCategory()},[])

    return <CategoryContext.Provider value={{getAllSubCategoriesOnCategory}}>
        {props.children}
    </CategoryContext.Provider>
}