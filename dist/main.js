"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = require("helmet");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use((0, helmet_1.default)());
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen('8080');
    const logger = new common_1.Logger('Main');
    logger.log(`REST port: 8080`);
}
bootstrap();
//# sourceMappingURL=main.js.map