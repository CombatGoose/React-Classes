import List from './List/List'
import { Component } from "react"

class App extends Component {

    state = {
        newProduct: {
            name: "",
            price: ""
        },
        products: [
            {
                id: 1,
                name: "TV",
                price: 7000
            }
        ]
    }

    handleChangeInput = (type, value) => {
        this.setState({
            ...this.state,
            newProduct: {
                ...this.state.newProduct,
                [type]: value
            }
        })
    }

    handleDeleteItem = (id) => {
        console.log(id)
        const updatedProducts = this.state.products.filter(product => product.id !== id)
        this.setState({
            ...this.state,
            products: updatedProducts,
        })
        console.log(updatedProducts)
    }

    handleCreateProduct = (name, price) => {
        this.setState({
            ...this.state,
            newProduct: {
                name: "",
                price: ""
            },
            products: [
                ...this.state.products,
                {
                    ...this.state.newProduct,
                    id: this.state.products.lenght
                }
            ]
        })
    }

    render() {
        return (
            <>
                <input onChange={(e) => this.handleChangeInput("name", e.target.value)}
                  value={this.state.newProduct.name}
                  type="text"
                  placeholder="Write name"
                   />
                   <input onChange={(e) => this.handleChangeInput("price", e.target.value)}
                    value={this.state.newProduct.price}
                    type="text"
                    placeholder="Write price" />
                   <button onClick={this.handleCreateProduct}>Create</button>
                   <List
                    products={this.state.products}
                    handleDelete={this.handleDeleteItem}
                   />
            </>
        )
    }
}

export default App