import { OnModuleInit } from '@nestjs/common';
export declare class DextoolsService implements OnModuleInit {
    onModuleInit(): Promise<void>;
    getTokenInfo(address: string): Promise<{
        isSucceed: boolean;
        msg: string;
        data: {
            TotalSupply: any;
            MaxSupply: any;
            CirculatingSupply: any;
            Holders: any;
        };
    } | {
        isSucceed: boolean;
        msg: any;
        data: any;
    }>;
}
