export const abi = [
    {
		"inputs": [
			{
				"internalType": "string",
				"name": "gameId",
				"type": "string"
			}
		],
		"name": "createGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
    {
		"inputs": [
			{
				"internalType": "string",
				"name": "gameId",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "result",
				"type": "uint8"
			}
		],
		"name": "resultAnnounced",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const contractAddress = "0xcb4068EB5Dad5A7869772Db33E19D209646484f0"
export const usdContractAddress = "0xCaF4c2c7D95ceE7E141389cAd8f07c0b92349aac";