// declarations.d.ts または任意の .d.ts ファイル
declare module "*.glb" {
    const value: string;
    export default value;
  }
  
  declare module "*.mp3" {
    const value: string;
    export default value;
  }
  
  declare module 'webxr-polyfill' {
    export default class WebXRPolyfill {
      constructor();
    }
  }
  