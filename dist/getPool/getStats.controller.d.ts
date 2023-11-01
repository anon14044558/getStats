import { GetStatsService } from './getStats.service';
export declare class GetStatsController {
    private readonly getStatsService;
    constructor(getStatsService: GetStatsService);
    getStats(tokenAddress: string): Promise<any>;
}
