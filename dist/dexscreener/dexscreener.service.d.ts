import { OnModuleInit } from '@nestjs/common';
export declare class DexscreenerService implements OnModuleInit {
    onModuleInit(): Promise<void>;
    getDexscreen(tokenAddress: string): Promise<{
        isSucceed: boolean;
        msg: string;
        data: {
            tokenData: {
                MarketCap: string;
                Volume: string;
            };
        };
    } | {
        isSucceed: boolean;
        msg: any;
        data: any;
    }>;
}
