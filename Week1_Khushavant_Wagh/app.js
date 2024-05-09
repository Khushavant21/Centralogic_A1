"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logic_1 = require("./logic");
const app = (0, express_1.default)();
const PORT = 8000;
app.use(express_1.default.json());
app.get('/split/:stringToSplit', (req, res) => {
    const stringToSplit = req.params.stringToSplit;
    const revisedString = (0, logic_1.splitString)(stringToSplit);
    res.json({ revisedString });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
