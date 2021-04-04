import "../../../App.css";

import DataCardSmall from "../../../components/data-cards/data-card-small/DataCardSmall";
import DataCardBig from "../../../components/data-cards/data-card-big/DataCardBig";
import DataCardList from "../../../components/data-cards/data-card-list/DataCardList";
import React, { Component } from "react";

import allProductsRequest from "../../../requests/allProducts";
import allUsersRequest from "../../../requests/allUsers";

class Dashboard extends Component {
    constructor(props) {
    super(props);
    this.state = {
      productsData: {
        count: 0,
        countByCategory: [],
      },
      usersData: {
        count: 0,
      },
    };
  }

  async componentDidMount() {
    const productRequest = await allProductsRequest.getAllProducts();
    const productsData = productRequest.data.data;

    const usersRequest = await allUsersRequest.getAllUsers();
    const usersData = usersRequest.data;

    this.setState({
      productsData: {
        ...productsData,
        countByCategory: Object.entries(productsData.countByCategory),
      },
      usersData,
    });
  }

  render(){
      return( 
      <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 mt-4 text-gray-800">Dashboard</h1>
                </div>
                <div className="row">
                  <DataCardSmall
                    color="primary"
                    title="Total de Productos"
                    value={this.state.productsData.count}
                  />
                  <DataCardSmall
                    color="secondary"
                    title="Total de Usuarios"
                    value={this.state.usersData.count}
                  />
                  <DataCardSmall
                    color="warning"
                    title="Total de Categorias"
                    value={this.state.productsData.categoryCount}
                  />
                </div>
                <div className="row">
                  <DataCardBig />
                  <DataCardList
                    categories={this.state.productsData.countByCategory}
                  />
                </div>
              </div>
            </div>)
  }
 
}

export default Dashboard;
