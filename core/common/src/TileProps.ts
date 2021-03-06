/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
/** @packageDocumentation
 * @module Tile
 */

import { Range3dProps, TransformProps } from "@bentley/geometry-core";

/** Wire format describing an [IModelTile]($frontend)
 * @internal
 */
export interface TileProps {
  /** The unique identifier of the tile's content */
  contentId: string;
  /** The volume of space represented by this tile. */
  range: Range3dProps;
  /** Optional volume within the tile's range which more tightly encloses the tile geometry */
  contentRange?: Range3dProps;
  /** The maximum size in pixels at which the tile should be drawn on the screen. Excludes the optional sizeMultiplier which is applied separately. 0.0 indicates this tile is not displayable. */
  maximumSize: number;
  /** Optional scaling factor applied to this tile's maximum size. Defaults to 1.0 if undefined. */
  sizeMultiplier?: number;
  /** Optional boolean indicating this tile has no children. Defaults to false if undefined. */
  isLeaf?: boolean;
}

/** Wire format adescribing an [IModelTileTree]($frontend)
 * @internal
 */
export interface TileTreeProps {
  /** The unique identifier of this TileTree within the iModel */
  id: string;
  /** Metadata describing the tree's root Tile. */
  rootTile: TileProps;
  /** Transform tile coordinates to iModel world coordinates. */
  location: TransformProps;
  /** If defined, limits the number of child tiles which can be skipped in selecting tiles of appropriate LOD */
  maxTilesToSkip?: number;
  /** If defined, specifies the number of levels of the tile tree that can be skipped when selecting tiles. */
  maxInitialTilesToSkip?: number;
  /** Optionally specifies the maximum tile format version supported. */
  formatVersion?: number;
  /** Optional volume within which content of all tiles' contents are guaranteed to be contained - never larger than `rootTile.range` and sometimes much smaller. */
  contentRange?: Range3dProps;
  /** Optional namespace applied to tile content Ids for tiles belonging to this tree. */
  contentIdQualifier?: string;
}
