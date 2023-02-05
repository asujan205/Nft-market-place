import FetchListed from "./fetchListed";
import FetchUserNft from "./fetchBuyed";
const OwnedNfts = () => {
  return (
    <>
      <div className="MainDiv">
        <div className="ListedNfts">
          <p>The Token I have listed</p>
          <FetchListed />
        </div>
        <div className="BuyedNfts">
          <p>The token i buyed</p>
          <FetchUserNft />
        </div>
      </div>
    </>
  );
};
export default OwnedNfts;
