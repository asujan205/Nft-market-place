import { useContract } from "@usedapp/core";

function MyComponent() {
  const contractAddress = "0x0bA3D2BE7977075CbDAE40ccBBf73c4FEbfdcb4A"; // Replace with the actual contract address

  const abi = useContract(contractAddress);

  console.log(abi);

  return <div>My Component</div>;
}
export default MyComponent;
