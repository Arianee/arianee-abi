module.exports = [{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"setLost","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"unsetLost","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_smartAssetAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Lost","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Retrieved","type":"event"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"isLost","outputs":[{"name":"_isLost","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"smartAsset","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]