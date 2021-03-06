/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/

/** @packageDocumentation
 * @module Tools
 */

import { IModelApp, PrimitiveVisibility, RenderTargetDebugControl, ScreenViewport, Tool } from "@bentley/imodeljs-frontend";

/** Executes some code against a RenderTargetDebugControl obtained from the selected viewport.
 * @beta
 */
export abstract class RenderTargetDebugControlTool extends Tool {
  public run(_args: any[]): boolean {
    const view = IModelApp.viewManager.selectedView;
    const control = undefined !== view ? view.target.debugControl : undefined;
    if (undefined !== control)
      this.execute(control, view!);

    return true;
  }

  protected abstract execute(_control: RenderTargetDebugControl, _vp: ScreenViewport): void;
}

/** Toggles between normal rendering and rendering as if drawing to an off-screen framebuffer for element locate. Useful for debugging locate issues.
 * @beta
 */
export class ToggleReadPixelsTool extends RenderTargetDebugControlTool {
  public static toolId = "ToggleReadPixels";
  public execute(control: RenderTargetDebugControl, vp: ScreenViewport): void {
    control.drawForReadPixels = !control.drawForReadPixels;
    vp.invalidateScene();
  }
}

/** Turn on the display of the draping frustum.
 * @alpha
 */
export class ToggleDrapeFrustumTool extends RenderTargetDebugControlTool {
  public static toolId = "ToggleDrapeFrustum";
  public execute(control: RenderTargetDebugControl, vp: ScreenViewport): void {
    control.displayDrapeFrustum = !control.displayDrapeFrustum;
    vp.invalidateRenderPlan();
  }
}
/** Control whether all geometry renders, or only instanced or batched geometry.
 * Allowed argument: "instanced", "batched", "all". Defaults to "all" if no arguments supplied.
 * @beta
 */
export class TogglePrimitiveVisibilityTool extends RenderTargetDebugControlTool {
  public static toolId = "TogglePrimitiveVisibility";
  public static get minArgs() { return 0; }
  public static get maxArgs() { return 1; }

  private _visibility = PrimitiveVisibility.All;

  public execute(control: RenderTargetDebugControl, vp: ScreenViewport): void {
    control.primitiveVisibility = this._visibility;
    vp.invalidateScene();
  }

  public parseAndRun(...args: string[]): boolean {
    if (0 < args.length) {
      switch (args[0].toLowerCase()) {
        case "instanced":
          this._visibility = PrimitiveVisibility.Instanced;
          break;
        case "batched":
          this._visibility = PrimitiveVisibility.Uninstanced;
          break;
        case "all":
          break;
        default:
          return true;
      }
    }

    return this.run(args);
  }
}

/** Turn on display of reality tile boundaies.
 * @alpha
 */
export class ToggleRealityTileBounds extends RenderTargetDebugControlTool {
  public static toolId = "ToggleRealityTileBounds";
  public execute(control: RenderTargetDebugControl, vp: ScreenViewport): void {
    control.displayRealityTileRanges = !control.displayRealityTileRanges;
    vp.invalidateScene();
  }
}

/** Turn on display of reality tile preload debugging.
 * @alpha
 */
export class ToggleRealityTilePreload extends RenderTargetDebugControlTool {
  public static toolId = "ToggleRealityTilePreload";
  public execute(control: RenderTargetDebugControl, vp: ScreenViewport): void {
    control.displayRealityTilePreload = !control.displayRealityTilePreload;
    vp.invalidateScene();
  }
}
/** Freeze loading of reality tiles.
 * @alpha
 */
export class ToggleRealityTileFreeze extends RenderTargetDebugControlTool {
  public static toolId = "ToggleRealityTileFreeze";
  public execute(control: RenderTargetDebugControl, vp: ScreenViewport): void {
    control.freezeRealityTiles = !control.freezeRealityTiles;
    vp.invalidateScene();
  }
}

/** Turn on logging of console tile selection and loadding (to console).
 * @alpha
 */
export class ToggleRealityTileLogging extends RenderTargetDebugControlTool {
  public static toolId = "ToggleRealityTileLogging";
  public execute(control: RenderTargetDebugControl, vp: ScreenViewport): void {
    control.logRealityTiles = !control.logRealityTiles;
    vp.invalidateScene();
  }
}

/** Sets support for intersecting volume classifiers.
 * @internal
 */
export class SetVolClassIntersectOn extends RenderTargetDebugControlTool {
  public static toolId = "VCIntersectOn";
  public execute(control: RenderTargetDebugControl, vp: ScreenViewport): void {
    control.vcSupportIntersectingVolumes = true;
    vp.invalidateRenderPlan();
  }
}

/** Sets support for intersecting volume classifiers.
 * @internal
 */
export class SetVolClassIntersectOff extends RenderTargetDebugControlTool {
  public static toolId = "VCIntersectOff";
  public execute(control: RenderTargetDebugControl, vp: ScreenViewport): void {
    control.vcSupportIntersectingVolumes = false;
    vp.invalidateRenderPlan();
  }
}
