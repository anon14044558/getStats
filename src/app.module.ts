import { Module } from '@nestjs/common';
import { GetStatsModule } from './getPool/getStats.module';


@Module({
  imports: [GetStatsModule]
})
export class AppModule {}
