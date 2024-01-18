import { Fragment } from "react"
function Welcome()
{
    const myStyle={color:"blue", textAlign:"left"};
    return (
    //    <Fragment>
        <>
        <h1 style={myStyle}>Welcome to the World of ReactJs</h1>
        <p>Just to show</p>
        <h1 style={myStyle}>another h1 tag example</h1>
        {/* </> </Fragment> */}
        </>
    );
}

export default Welcome;