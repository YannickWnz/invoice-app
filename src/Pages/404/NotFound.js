import './NotFound.scss'

const NotFound = () => {

    const style = {
        fontSize: '5em',
        color: 'white',
        textAlign: 'center'
    }

    return (
        <div className="not-found">
            <h1 style={style} >Page not found</h1>
        </div>
    )
}

export default NotFound