import React from "react"

class Products extends React.Component{
    AlertMethod() {
        const message = (e) => window.alert(`${this.description}`)

        return(
        <this.AlertMethod someCallback = {message}/>
    );

    }
    render(){
        return(
            <div>
                <button onClick={(e) => this.props.someCallback(e)}>{this.props.product.name}</button>
                <p>Price: {this.props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
                <hr/>
            </div>
        )
    }
}

export default Products