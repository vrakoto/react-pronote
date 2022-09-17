import '../../css/visitor/home.css'

function Body(props) {
    return (
        <>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default Body