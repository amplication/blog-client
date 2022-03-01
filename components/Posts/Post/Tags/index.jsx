
const Tags = (props) => {
    if ( props.list ) {
        return (
            <div className={'mt-4 text-tiny text-white flex flex-row'}>
                { props.list.map((tag, i) => {
                    return (<span className={'py-1 px-2 bg-light-blue rounded-full border border-solid border-lite mr-1.5 leading-tag'} key={i}>{tag}</span>)
                })}
            </div>
        )
    }
}

export default Tags
