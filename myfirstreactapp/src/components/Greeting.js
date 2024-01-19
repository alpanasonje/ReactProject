function Greeting({ name }) 
{
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
    return <h3>Hello{name && ', '}{name}!</h3>;
}

export default Greeting;