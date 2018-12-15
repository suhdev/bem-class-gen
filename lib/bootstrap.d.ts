export interface IBootstrap {
    /**
     * forces display flex
     */
    readonly flex: IBootstrap;
    readonly inflex: IBootstrap;
    /**
     * starts a 'xs' media query
     */
    readonly x: IBootstrap;
    /**
     * Starts an 'sm' media query
     */
    readonly s: IBootstrap;
    /**
     * Starts an 'md' media query
     */
    readonly m: IBootstrap;
    /**
     * Starts an 'lg' media query
     */
    readonly l: IBootstrap;
    /**
     * Starts an 'xl' media query
     */
    readonly xl: IBootstrap;
    /**
     * Align items center, applies previously started query
     */
    readonly ac: IBootstrap;
    /**
     * Align items stretch, applies previously started query
     */
    readonly asst: IBootstrap;
    /**
     * Align items start, applies previously started query
     */
    readonly as: IBootstrap;
    /**
     * Align items end, applies previously started query
     */
    readonly ae: IBootstrap;
    /**
     * Align items left, applies previously started query
     */
    readonly al: IBootstrap;
    /**
     * Align items right, applies previously started query
     */
    readonly ar: IBootstrap;
    /**
     * Align self center, applies previously started query
     */
    readonly asc: IBootstrap;
    /**
     * Align self end, applies previously started query
     */
    readonly ase: IBootstrap;
    /**
     * No tab index
     */
    readonly nti: IBootstrap;
    /**
     * Align self right, applies previously started query
     */
    readonly asr: IBootstrap;
    /**
     * Align self start, applies previously started query
     */
    readonly ass: IBootstrap;
    /**
     * Align self left, applies previously started query
     */
    readonly asl: IBootstrap;
    /**
     * Justify content between, applies previously started query
     */
    readonly jcb: IBootstrap;
    /**
     * Justify content around, applies previously started query
     */
    readonly jca: IBootstrap;
    /**
     * Justify content center, applies previously started query
     */
    readonly jcc: IBootstrap;
    /**
     * Justify content start, applies previously started query
     */
    readonly jcs: IBootstrap;
    /**
     * Justify content end, applies previously started query
     */
    readonly jce: IBootstrap;
    /**
     * adds flex row, applies previously started query
     */
    readonly r: IBootstrap;
    /**
     * Reverse row
     */
    readonly rr: IBootstrap;
    /**
     * adds flex column, applies previously started query
     */
    readonly c: IBootstrap;
    /**
     * adds col
     */
    readonly gc: IBootstrap;
    /**
     * adds grid row
     */
    readonly gr: IBootstrap;
    /**
     * Adds flex-wrap
     */
    readonly fw: IBootstrap;
    /**
     * adds no-gutter
     */
    readonly ng: IBootstrap;
    /**
     * adds column with specified no. of columns, applies previoiusly started query
     */
    col(columns: number): IBootstrap;
    bl(b: string): IBootstrap;
    el(e: string): IBootstrap;
    add(c: string): IBootstrap;
    mod(m: string): IBootstrap;
    icon(i: string): string;
    amod(m: string): IBootstrap;
    /**
     * builds the classname
     */
    readonly make: string;
    readonly bem: string;
    readonly be: string;
}
export declare function B(base?: string): IBootstrap;
