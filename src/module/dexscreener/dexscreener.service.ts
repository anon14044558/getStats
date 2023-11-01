import { Injectable, OnModuleInit } from '@nestjs/common';
import fetch from 'node-fetch';
import { formatNum } from 'src/utils/common';

@Injectable()
export class DexscreenerService implements OnModuleInit {

  async onModuleInit() {
    console.log('DexscreenerService');
  }

  async getDexscreen(tokenAddress: string) {
    try {
      const url = `https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`;
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
        },
      });

      const resData = await res.json();
      const pairs = resData.pairs;

      if (pairs.length > 0) {
        const pairData = pairs[0];
        const volumeH24 = pairData.volume.h24;

        const tokenData = {
          MarketCap: formatNum(pairData.fdv),
          Volume: formatNum(volumeH24),
        };

        return {
          isSucceed: true,
          msg: 'Success',
          data: {
            tokenData,
          },
        };
      }
    } catch (error) {
      return {
        isSucceed: false,
        msg: error.message,
        data: null,
      };
    }
  }
}
