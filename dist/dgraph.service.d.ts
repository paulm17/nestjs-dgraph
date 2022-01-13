import { DgraphModuleOptions } from './interfaces/dgraph-options.interface';
import { DgraphClient } from 'dgraph-js';
export declare class DgraphService {
    private _client;
    private _stubs;
    get client(): DgraphClient;
    constructor(options: DgraphModuleOptions);
    createClient(options: DgraphModuleOptions): DgraphClient;
    close(): void;
}
