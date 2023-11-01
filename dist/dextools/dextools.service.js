"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DextoolsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let DextoolsService = class DextoolsService {
    async onModuleInit() {
        console.log('DextoolsService');
    }
    async getTokenInfo(address) {
        const url = `https://api.dextools.io/v1/token?chain=polygon&address=${address}&pageSize=5`;
        console.log(url);
        try {
            const res = await (0, axios_1.default)(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': 'ff7a6d32b87cb07500d36a93b977d6e6',
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
                },
            });
            const resData = await res.data;
            return {
                isSucceed: true,
                msg: 'Success',
                data: {
                    TotalSupply: resData.data.metrics.totalSupply,
                    MaxSupply: resData.data.metrics.maxSupply,
                    CirculatingSupply: resData.data.metrics.circulatingSupply,
                    Holders: resData.data.metrics.holders,
                },
            };
        }
        catch (error) {
            console.log(error);
            return {
                isSucceed: false,
                msg: error,
                data: null,
            };
        }
    }
};
exports.DextoolsService = DextoolsService;
exports.DextoolsService = DextoolsService = __decorate([
    (0, common_1.Injectable)()
], DextoolsService);
//# sourceMappingURL=dextools.service.js.map