import { Controller, Get, Query } from '@nestjs/common';
import { GetStatsService } from './getStats.service';

@Controller('Stats')
export class GetStatsController {
  constructor(private readonly getStatsService: GetStatsService) {}

  @Get()
  async getStats(@Query('tokenAddress') tokenAddress: string): Promise<any> {
    try {
      const Stats = await this.getStatsService.checkStats(tokenAddress);
      if (Stats) {
        return {
          data: Stats,
          success: true,
          message: 'Data retrieved successfully',
        };
      } else {
        return {
          data: null,
          success: false,
          message: 'No data found for the provided parameters',
        };
      }
    } catch (error) {
      return {
        data: null,
        success: false,
        message: error.message,
      };
    }
  }
}
