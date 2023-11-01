// get-Stats.module.ts
import { Module } from '@nestjs/common';
import { GetStatsService } from './getStats.service';
import { GetStatsController } from './getStats.controller';
import { DexscreenerModule } from '../module/dexscreener/dexscreener.module';
import { DextoolsModule } from '../module/dextools/dextools.module';

@Module({
  imports: [DexscreenerModule, DextoolsModule],
  providers: [GetStatsService],
  controllers: [GetStatsController],
})
export class GetStatsModule {}
