const ProductList = ( props ) => {
    console.log("props", props);
    return (
        <main>
            <p>Swadhin</p>
        </main>
    )
}

export async function getServerSideProps() {

        const data = await(await fetch('https://fakestoreapi.com/products')).json();
        return{
            props: {
                data,
            }
        }
        
}




export default ProductList;