import React ,{useState}from 'react'
import Web3 from 'web3';

const useConnected = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState('');``
     React
        .useEffect(() => {
            if ( isConnected == false) {
                connect();
            }
        }
            , [isConnected]);
    const connect = async () => {
        const web3 = new Web3(Web3.givenProvider);
            web3.eth.getAccounts().then((accounts) => {
                if (accounts.length > 0) {
                       
                    setIsConnected(true);
                    setAccount(accounts[0]);
                } else {
                    setIsConnected(false);
                }
            });
        }
    return { isConnected , account};
}

export default useConnected;