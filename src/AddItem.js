import { Component } from "react";
class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: {
                productId: props.products[0].id,
                quantity: 0
            }
        }
    }

    submit = e => {
        e.preventDefault();
        this.props.submitFunc(this.state.selectedItem);
    }

    onChange = e => {
        const target = e.target.dataset.key;
        const value = e.target.value;
        this.setState(prevState => ({
            selectedItem: {
                ...prevState.selectedItem,
                [target]: value
            }
        }));
    }

    render() {
        return (<form className="container" onSubmit={this.submit}>
            <label for="quantity">Quantity</label>
            <input id="quantity" data-key="quantity" className="inputQuantity" type="text" onChange={this.onChange} />
            <label for="product">Products</label>
            <select id="product" data-key="productId" onChange={this.onChange}>
                {this.props.products.map((product, id) => <option key={id} value={product.id}>
                    {product.name}
                    </option>)}
            </select>
            <input type="submit" value="Submit" />
        </form >);

    }
}

export default AddItem;