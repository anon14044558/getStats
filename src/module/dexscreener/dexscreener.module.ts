import { Module } from '@nestjs/common'
import { DexscreenerService } from './dexscreener.service'

@Module({
  imports: [],
  providers: [DexscreenerService],
  exports: [DexscreenerService],
  controllers: []
})
export class DexscreenerModule {}
