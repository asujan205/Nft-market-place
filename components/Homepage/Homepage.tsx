import React from "react";
import useConnected from "./useConnected";
const Homepage:any =()=>{
    const checkArray = useConnected()
    
    return (<>
    {checkArray.isConnected ?
    <>
    {checkArray.account}
    </>
    
    :<>
    <button>connectWallet</button>
    </>
    }
    </>)

}
export default Homepage