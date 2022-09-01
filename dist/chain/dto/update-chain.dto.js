"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChainDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_chain_dto_1 = require("./create-chain.dto");
class UpdateChainDto extends (0, mapped_types_1.PartialType)(create_chain_dto_1.CreateChainDto) {
}
exports.UpdateChainDto = UpdateChainDto;
//# sourceMappingURL=update-chain.dto.js.map