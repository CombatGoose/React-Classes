import ListItem from './ListItem'

const List = (props) => {
    return (
        <ul>
            {props.products.map(product => (
                <ListItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    handleDelete={props.handleDelete}
                />
            ))}
        </ul>
    )
}

export default List