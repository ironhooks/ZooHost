declare module "*.json" {
  const value: {
    width: number; height: number; fps: number; durationInFrames: number;
    items: Array<
      | {type:"video"|"image";src:string;start:number;duration:number;fit?:"cover"|"contain"}
      | {type:"audio";src:string;start:number;duration:number;volume?:number}
      | {type:"text";text:string;start:number;duration:number;y?:number}
    >;
  };
  export default value;
}
