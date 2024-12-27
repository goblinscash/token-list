const { version } = require("../package.json");

const bsc = require("../tokens/bsc.json");
const base = require("../tokens/base.json");
const bch = require("../tokens/bch.json");



module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "Goblins Cash Menu",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/goblinscash/goblins-icons/main/blockchains/smartchain/assets/0x701ACA29AE0F5d24555f1E8A6Cf007541291d110/logo.png",
    keywords: ["goblinscash", "default"],
    tokens: [     
      ...bsc,
      ...base,
      ...bch
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
