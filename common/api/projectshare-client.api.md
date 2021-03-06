## API Report File for "@bentley/projectshare-client"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AuthorizedClientRequestContext } from '@bentley/itwin-client';
import { GuidString } from '@bentley/bentleyjs-core';
import { WsgClient } from '@bentley/itwin-client';
import { WsgInstance } from '@bentley/itwin-client';
import { WsgQuery } from '@bentley/itwin-client';

// @alpha
export class ProjectShareClient extends WsgClient {
    constructor();
    // (undocumented)
    static readonly configRegion = "imjs_project_share_client_region";
    // (undocumented)
    static readonly configRelyingPartyUri = "imjs_project_share_client_relying_party_uri";
    // (undocumented)
    static readonly configURL = "imjs_project_share_client_url";
    protected getDefaultUrl(): string;
    getFiles(requestContext: AuthorizedClientRequestContext, contextId: GuidString, query: ProjectShareQuery): Promise<ProjectShareFile[]>;
    getFolders(requestContext: AuthorizedClientRequestContext, contextId: GuidString, query: ProjectShareQuery): Promise<ProjectShareFolder[]>;
    // (undocumented)
    protected getRegion(): number | undefined;
    // (undocumented)
    protected getRelyingPartyUrl(): string;
    getUrl(requestContext: AuthorizedClientRequestContext, excludeApiVersion?: boolean): Promise<string>;
    protected getUrlSearchKey(): string;
    readFile(requestContext: AuthorizedClientRequestContext, file: ProjectShareFile, maxByteCount?: number): Promise<Uint8Array>;
    readFileNodeJs(requestContext: AuthorizedClientRequestContext, file: ProjectShareFile): Promise<Uint8Array>;
    // (undocumented)
    static readonly searchKey: string;
    updateCustomProperties(requestContext: AuthorizedClientRequestContext, contextId: GuidString, file: ProjectShareFile, updateProperties?: Array<{
        Name: string;
        Value: string;
    }>, deleteProperties?: string[]): Promise<ProjectShareFile>;
}

// @alpha
export class ProjectShareFile extends WsgInstance {
    accessUrl?: string;
    // (undocumented)
    contentType?: string;
    // (undocumented)
    createdBy?: string;
    // (undocumented)
    createdTimeStamp?: string;
    // (undocumented)
    customProperties?: any;
    // (undocumented)
    instanceId?: string;
    // (undocumented)
    modifiedBy?: string;
    // (undocumented)
    modifiedTimeStamp?: string;
    // (undocumented)
    name?: string;
    // (undocumented)
    parentFolderWsgId?: string;
    // (undocumented)
    path?: string;
    // (undocumented)
    size?: number;
}

// @alpha
export class ProjectShareFileQuery extends ProjectShareQuery {
    startsWithPath(contextId: GuidString, path: string): this;
}

// @alpha
export class ProjectShareFolder extends WsgInstance {
    // (undocumented)
    contentType?: string;
    // (undocumented)
    createdBy?: string;
    // (undocumented)
    createdTimeStamp?: string;
    // (undocumented)
    modifiedBy?: string;
    // (undocumented)
    modifiedTimeStamp?: string;
    // (undocumented)
    name?: string;
    // (undocumented)
    parentFolderId?: string;
    // (undocumented)
    path?: string;
    // (undocumented)
    size?: number;
}

// @alpha
export class ProjectShareFolderQuery extends ProjectShareQuery {
    inPath(contextId: GuidString, path: string): this;
}

// @alpha
export class ProjectShareQuery extends WsgQuery {
    byWsgIds(...ids: GuidString[]): this;
    inFolder(folderId: GuidString): this;
    inFolderWithNameLike(folderId: GuidString, searchName: string): this;
    inRootFolder(contextId: GuidString): this;
    startsWithPathAndNameLike(contextId: GuidString, path: string, nameLike?: string): this;
}


// (No @packageDocumentation comment for this package)

```
