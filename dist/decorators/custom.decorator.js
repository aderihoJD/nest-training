"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserAgent = void 0;
const common_1 = require("@nestjs/common");
exports.GetUserAgent = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.headers['user-agent'];
});
//# sourceMappingURL=custom.decorator.js.map