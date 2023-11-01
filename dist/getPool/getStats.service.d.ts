import { OnModuleInit } from '@nestjs/common';
import { DexscreenerService } from '../dexscreener/dexscreener.service';
import { DextoolsService } from '../dextools/dextools.service';
export declare class GetStatsService implements OnModuleInit {
    private readonly DextoolsService;
    private readonly dexscreenerService;
    constructor(DextoolsService: DextoolsService, dexscreenerService: DexscreenerService);
    onModuleInit(): Promise<void>;
    checkStats(tokenAddress: string): Promise<{
        Stats: {
            'Market cap': any;
            'Volume(24h)': any;
            'Total supply': any;
            'Max supply': any;
            'Circulating supply': any;
            Holding: any;
        };
    }>;
}
