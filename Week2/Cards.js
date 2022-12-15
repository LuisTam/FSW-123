function Cards(props){
    return(
        <>
        <h1>{props.message}</h1>
        <h2 style={{borderBottom: "1px solid white"}}>{props.subtitle}</h2>
        <h3>{props.info}</h3>
        </>
        
    );
}

export default Cards