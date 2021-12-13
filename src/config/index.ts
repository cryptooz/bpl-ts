// tslint:disable:object-literal-sort-keys

export default {
  networks: {
    mainnet: {
      bip32: {
        private: 0x2bf4530,
        public: 0x2bf4968,
      },
      name: 'mainnet',
      nethash: '585bdcc1c4434beab47078224c707072ef7dd8927187e2b8632907fb8b6d5153',
      token: 'BPL',
      symbol: 'β',
      version: 0x19,
      explorer: 'https://explorer.blockpool.io',
      wif: 0xaa,
      p2pPort: 9030,
      apiPort: 9031,
      p2pVersion: '2.0.0',
      isV2: true,
      activePeer: {
        ip: 'http://explorer.blockpool.io',
        port: 9031,
      },
      peers: [
        '173.249.4.137:9031',
        '173.249.15.94:9031',
        '46.4.82.232:9031',
        '195.201.135.36:9031'
      ],
    },
    audiocoin: {
      bip32: {
        public: 0x043587cf,
        private: 0x04358394,
      },
      name: 'audiocoin',
      nethash: '6dc67a1b4b9f119be2daecc981b14c83505a941bcfe94477dece65d6a897fc95',
      token: 'ADC',
      symbol: 'A',
      version: 23,
      explorer: 'https://explorer.adc.blockpool.io',
      wif: 0xaa,
      p2pPort: 20100,
      apiPort: 20101,
      p2pVersion: '2.0.0',
      isV2: true,
      activePeer: {
        ip: 'http://api.adc.blockpool.io',
        port: 20101,
      },
      peers: [
        '104.154.23.78:20101',
        '34.71.26.203:20101',
        '34.105.7.219:20101',
        '202.61.203.92:20101'
      ],
    },
  },
  blockchain: {
    interval: 15,
    delegates: 201,
    date: new Date(Date.UTC(2017, 2, 21, 13, 0, 0, 0)),
  },
};
