export const swapAbi: any = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "acceptSwap",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "cancelSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "changeFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner2",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nftContract1",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId1",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_nftContract2",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId2",
        type: "uint256",
      },
    ],
    name: "createSwap",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "FeeChange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "rejectSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner1",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner2",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "SwapCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner1",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner2",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftContract1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftContract2",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId2",
        type: "uint256",
      },
    ],
    name: "SwapCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner1",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner2",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftContract1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftContract2",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId2",
        type: "uint256",
      },
    ],
    name: "SwapCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner1",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner2",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "SwapRejected",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getSwap",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "owner1",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner2",
            type: "address",
          },
          {
            internalType: "address",
            name: "nftContract1",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId1",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract2",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId2",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isSwapped",
            type: "bool",
          },
        ],
        internalType: "struct TokenSwap.Swap",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
