import { Injectable, OnModuleInit } from '@nestjs/common'
import { DexscreenerService } from '../module/dexscreener/dexscreener.service'
import { DextoolsService } from '../module/dextools/dextools.service'

@Injectable()
export class GetStatsService implements OnModuleInit {
  constructor(
    private readonly DextoolsService: DextoolsService,
    private readonly dexscreenerService: DexscreenerService
  ) {}
  
  async onModuleInit() {
    console.log('getStatsService')
  }

  async checkStats(tokenAddress: string) {
    try {
      const dexscreener = await this.dexscreenerService.getDexscreen(tokenAddress)
      const dextool = await this.DextoolsService.getTokenInfo(tokenAddress)

      const dextools = dextool.data

      if (dexscreener.isSucceed) {
        const formattedInfo = {
          Stats: {
            'Market cap': dexscreener.data.tokenData.MarketCap,
            'Volume(24h)': dexscreener.data.tokenData.Volume,
            'Total supply': dextools.TotalSupply.toFixed(2),
            'Max supply': dextools.MaxSupply.toFixed(2),
            'Circulating supply': dextools.CirculatingSupply.toFixed(2),
            'Holding': dextools.Holders
          }
        }
        return formattedInfo
      } else {
        console.error('Lỗi khi lấy dữ liệu token:', dexscreener.msg)
        return null
      }
    } catch (error) {
      console.error('Lỗi khi kiểm tra Stats:', error)
      return null
    }
  }
}
