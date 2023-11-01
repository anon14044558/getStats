import { Injectable, OnModuleInit } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DextoolsService implements OnModuleInit {

  async onModuleInit() {
    console.log('DextoolsService');
  }

  async getTokenInfo(address: string) {
    const url = `https://api.dextools.io/v1/token?chain=polygon&address=${address}&pageSize=5`;
    console.log(url);
    try {
      const res = await axios(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'ff7a6d32b87cb07500d36a93b977d6e6',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
        },
      });

      const resData = await res.data;

      return {
        isSucceed: true,
        msg: 'Success',
        data: {
          TotalSupply: resData.data.metrics.totalSupply,
          MaxSupply: resData.data.metrics.maxSupply,
          CirculatingSupply: resData.data.metrics.circulatingSupply,
          Holders: resData.data.metrics.holders,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        isSucceed: false,
        msg: error,
        data: null,
      };
    }
  }
}
