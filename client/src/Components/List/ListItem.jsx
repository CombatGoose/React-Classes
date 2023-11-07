import Button from '../Button/Button'

const ListItem = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <Button 
            handleDelete={props.handleDelete}
            id={props.id}
            />
        </div>
    )
}

export default ListItem