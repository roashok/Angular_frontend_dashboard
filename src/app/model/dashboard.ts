

export interface widget{
    id:number;
    type: string;
    title?: string;
    namex: string;
    contentx:Array<unknown>;
    contenty:Array<number>;
    rows?:number;
    columns?:number;
}