"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNum = void 0;
function formatNum(value) {
    const num = parseFloat(value);
    if (num >= 1000000) {
        const formattedValue = (num / 1000000).toFixed(1) + 'm';
        return formattedValue;
    }
    else if (num >= 1000) {
        const formattedValue = (num / 1000).toFixed(1) + 'k';
        return formattedValue;
    }
    else {
        return num.toString();
    }
}
exports.formatNum = formatNum;
//# sourceMappingURL=common.js.map