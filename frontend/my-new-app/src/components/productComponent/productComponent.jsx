import './productComponent.css'


const  productComponent = ( {product}) => {
  return (
    <>
        <div  className='mainProductComponent'>
            <div className='imagContainerMain'>
            src={`http://localhost:4000/images/${product.image}`}
            </div>

            <div className='detailsContainerMain'>
                <h1>{product.name}</h1>
                <h4>{product.price}</h4>
                <h4>{product.description}</h4>


            </div>
            

        </div>

    </>
  )
}

export default productComponent