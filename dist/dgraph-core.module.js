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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var DgraphCoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DgraphCoreModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const dgraph_constants_1 = require("./dgraph.constants");
const dgraph_service_1 = require("./dgraph.service");
let DgraphCoreModule = DgraphCoreModule_1 = class DgraphCoreModule {
    constructor(options, moduleRef) {
        this.options = options;
        this.moduleRef = moduleRef;
    }
    static forRoot(options) {
        const dgraphModuleOptions = {
            provide: dgraph_constants_1.DGRAPH_MODULE_OPTIONS,
            useValue: options,
        };
        return {
            module: DgraphCoreModule_1,
            providers: [dgraphModuleOptions, dgraph_service_1.DgraphService],
            exports: [dgraph_service_1.DgraphService],
        };
    }
    onModuleDestroy() {
        return __awaiter(this, void 0, void 0, function* () {
            const service = this.moduleRef.get(dgraph_service_1.DgraphService);
            service.close();
        });
    }
};
DgraphCoreModule = DgraphCoreModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({}),
    __param(0, (0, common_1.Inject)(dgraph_constants_1.DGRAPH_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object, core_1.ModuleRef])
], DgraphCoreModule);
exports.DgraphCoreModule = DgraphCoreModule;