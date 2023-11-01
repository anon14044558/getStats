import { Module } from '@nestjs/common'
import { DextoolsService } from './dextools.service'

@Module({
  imports: [],
  providers: [DextoolsService],
  exports: [DextoolsService],
  controllers: []
})
export class DextoolsModule {}
