import React from "react";
import useConnected from "./useConnected";
const Homepage:any =()=>{
    const checkArray = useConnected()
    
    const ConnectWallet=()=>{
        
    }
    return (<>
    {checkArray.isConnected ?
    <>
    {checkArray.account}
    </>
    
    :<>
    <button onClick={ConnectWallet} >connectWallet</button>
    </>
    }
    </>)

}
export default Homepage