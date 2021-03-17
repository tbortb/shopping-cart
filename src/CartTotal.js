const CartTotal = ({items}) => {
    const total = items.map(item => item.quantity * item.product.priceInCents)
    .reduce((total, current) => total + current, 0) / 100;

    return <div> Total Price: {total}</div>
}

export default CartTotal;