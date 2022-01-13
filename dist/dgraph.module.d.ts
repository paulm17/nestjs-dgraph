import { DynamicModule } from '@nestjs/common';
import { DgraphModuleOptions } from './interfaces/dgraph-options.interface';
export declare class DgraphModule {
    static forRoot(options?: DgraphModuleOptions): DynamicModule;
}
