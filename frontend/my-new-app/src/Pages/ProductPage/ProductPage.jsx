import { useEffect,useState } from 'react';
import './ProductPage.css'
import axios from 'axios';
import ProductComponent from '../../components/productComponent/productComponent';

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
          try {
             const url = `http://localhost:4000/api/products/`;
             console.log('Fetching products from:', url);
         
             const response = await axios.get(url);
             setProducts(response.data);
          } catch (error) {
             console.error("Error fetching company data:", error);
          }
         }; 

         fetchProduct();

        }, []); // Add category as a dependency




  return (
    <>
        <div className='productPageMain'>
            {products.map((item) =>(

            <ProductComponent 
            key={item._id}
            product={item}/>
            ))}

        </div>
    </>
  )
}

export default  ProductPage