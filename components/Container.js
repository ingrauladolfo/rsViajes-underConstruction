import Head from "next/head"
const Container = (props)=>{
    return(
        <>
            <div >
                {props.children}
            </div>
        </>
        
    )
}
export default Container