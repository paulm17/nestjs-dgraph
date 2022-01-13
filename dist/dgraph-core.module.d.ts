import { DynamicModule, OnModuleDestroy } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { DgraphModuleOptions } from './interfaces/dgraph-options.interface';
export declare class DgraphCoreModule implements OnModuleDestroy {
    private readonly options;
    private readonly moduleRef;
    constructor(options: DgraphModuleOptions, moduleRef: ModuleRef);
    static forRoot(options: DgraphModuleOptions): DynamicModule;
    onModuleDestroy(): Promise<void>;
}
