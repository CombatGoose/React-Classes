const Button = (props) => {
    const handleDeleteClick = () => {
        props.handleDelete(props.id)
    }
    return (
        <button onClick={handleDeleteClick}>Delete</button>
    )
}

export default Button