import React, { Component } from 'react';
import allProductsRequest from "../../../requests/allProducts";
import "../../../App.css";


class ProductsList extends Component {
    constructor(props) {
    super(props);
    this.state = {
     allProducts: [
         {
             name: "loading",
             category: {
                 name: "loading",
             },
             price: "loading",
             qty_stock: "loading",
             qty_sales: "loading",
             
         }
     ],
    };
  }

    async componentDidMount() {
    const productRequest = await allProductsRequest.getAllProducts();
    const allProducts = productRequest.data.data.products;

    this.setState({
      allProducts,
    });
    }

	render() {
		return (
			<table className="m-5 table table-striped">
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Ventas</th>
                </tr>
                    {
                    this.state.allProducts.map((product)=>{
                        return(
                            <tr>
                                <td>
                                    <img></img>
                                </td>
                                <td>
                                    {product.name}
                                </td>
                                <td>
                                    {product.category.name}
                                </td>
                                <td>
                                    {product.price}
                                </td>
                                <td>
                                    {product.qty_stock}
                                </td>
                                <td>
                                    {product.qty_sales}
                                </td>
                            </tr>
                        )
                    })}
            
                    
            </table>
		);
	};
}

export default ProductsList;