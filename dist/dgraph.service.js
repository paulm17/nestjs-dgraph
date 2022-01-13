"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DgraphService = void 0;
const common_1 = require("@nestjs/common");
const dgraph_constants_1 = require("./dgraph.constants");
const dgraph_js_1 = require("dgraph-js");
let DgraphService = class DgraphService {
    constructor(options) {
        this.createClient(options);
    }
    get client() {
        return this._client;
    }
    createClient(options) {
        if (!this._client) {
            this._stubs = options.stubs.map(stub => {
                return new dgraph_js_1.DgraphClientStub(stub.address, stub.credentials, stub.options);
            });
            this._client = new dgraph_js_1.DgraphClient(...this._stubs);
            if (options.debug) {
                this._client.setDebugMode(true);
            }
        }
        return this._client;
    }
    close() {
        if (this._stubs) {
            this._stubs.forEach(stub => {
                stub.close();
            });
            this._stubs = null;
        }
        this._client = null;
    }
};
DgraphService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(dgraph_constants_1.DGRAPH_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], DgraphService);
exports.DgraphService = DgraphService;
