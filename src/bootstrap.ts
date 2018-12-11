var alignPrefix = 'align-items-'; 
var alignSelfPrefix = 'align-self-'; 
var justifyContentPrefix = 'justify-content-'; 
export interface IBootstrap {
  /**
   * forces display flex
   */
  readonly flex:IBootstrap; 
  readonly inflex:IBootstrap; 
  /**
   * starts a 'xs' media query
   */
  readonly x:IBootstrap; 
  /**
   * Starts an 'sm' media query
   */
  readonly s:IBootstrap; 
  /**
   * Starts an 'md' media query
   */
  readonly m:IBootstrap; 
  /**
   * Starts an 'lg' media query
   */
  readonly l:IBootstrap; 
  /**
   * Starts an 'xl' media query
   */
  readonly xl:IBootstrap; 
  /**
   * Align items center, applies previously started query
   */
  readonly ac:IBootstrap; 
  /**
   * Align items stretch, applies previously started query 
   */
  readonly asst:IBootstrap; 
  /**
   * Align items start, applies previously started query
   */
  readonly as:IBootstrap; 
  /**
   * Align items end, applies previously started query
   */
  readonly ae:IBootstrap; 
  /**
   * Align items left, applies previously started query
   */
  readonly al:IBootstrap; 
  /**
   * Align items right, applies previously started query
   */
  readonly ar:IBootstrap; 
  /**
   * Align self center, applies previously started query
   */
  readonly asc:IBootstrap;
  /**
   * Align self end, applies previously started query
   */
  readonly ase:IBootstrap;

  /**
   * No tab index
   */
  readonly nti:IBootstrap; 
  /**
   * Align self right, applies previously started query
   */
  readonly asr:IBootstrap; 
  /**
   * Align self start, applies previously started query
   */
  readonly ass:IBootstrap; 
  /**
   * Align self left, applies previously started query
   */
  readonly asl:IBootstrap; 
  /**
   * Justify content between, applies previously started query
   */
  readonly jcb:IBootstrap;
  /**
   * Justify content around, applies previously started query
   */
  readonly jca:IBootstrap; 

  /**
   * Justify content center, applies previously started query
   */
  readonly jcc:IBootstrap; 

  /**
   * Justify content start, applies previously started query
   */
  readonly jcs:IBootstrap; 
  
  /**
   * Justify content end, applies previously started query 
   */
  readonly jce:IBootstrap; 
  /**
   * adds flex row, applies previously started query 
   */
  readonly r:IBootstrap;
  /**
   * Reverse row 
   */
  readonly rr:IBootstrap;
  /**
   * adds flex column, applies previously started query 
   */
  readonly c:IBootstrap; 
  /**
   * adds col
   */
  readonly gc:IBootstrap; 
  /**
   * adds grid row
   */
  readonly gr:IBootstrap;
  /**
   * Adds flex-wrap 
   */
  readonly fw:IBootstrap;
  /**
   * adds no-gutter
   */ 
  readonly ng:IBootstrap; 
  /**
   * adds column with specified no. of columns, applies previoiusly started query 
   */
  col(columns:number):IBootstrap; 
  bl(b:string):IBootstrap; 
  el(e:string):IBootstrap; 
  add(c:string):IBootstrap; 
  mod(m:string):IBootstrap; 
  icon(i:string):string; 
  amod(m:string):IBootstrap; 
  /**
   * builds the classname 
   */
  readonly make:string; 
  readonly bem:string; 
  readonly be:string; 

}
export function B(base = ''):IBootstrap{
    var clz = base+' '; 
    var block = ''; 
    var el = ''; 
    var mod = ''; 
    var amod = ''; 
    // var amode = ''; 
    var query = ''; 
    return {
      icon(i:string){
        return 'sys-icon-'+i; 
      },
      bl(b:string){
        block = b.trim(); 
        return this; 
      },
      el(b:string){
        el = b.trim(); 
        return this; 
      },
      mod(m:string){
        mod = m.trim(); 
        return this; 
      },
      amod(m:string){
        amod = m.toString(); 
        return this; 
      },
      add(c:string){
        clz += ' '+c; 
        return this; 
      },
      get flex(){
        clz += ' d-flex'; 
        return this; 
      },

      get inflex(){
        clz += ' d-inline-flex'; 
        return this; 
      },
      
      get x(){
        query = 'xs-';
        return this; 
      },

      get rr(){
        clz += ` flex-${query}row-reverse`; 
        query = ''; 
        return this; 
      },
      get s(){
        query = 'sm-';
        return this; 
      },
      get m(){
        query = 'md-'; 
        return this; 
      },
      
      get l(){
        query = 'lg-'; 
        return this; 
      },
      
      get xl(){
        query = 'xl-'; 
        return this; 
      },
      
      get ac(){
        clz += ` ${alignPrefix}${query}center`; 
        query = '';
        return this; 
      },
      
      get as(){
        clz += ` ${alignPrefix}${query}start`; 
        query = '';
        return this; 
      },

      get asst() {
        clz += ` ${alignPrefix}${query}stretch`;
        query = '';
        return this;
      },
      
      get ae(){
        clz += ` ${alignPrefix}${query}end`; 
        query = '';
        return this; 
      },
      
      get al(){
        clz += ` ${alignPrefix}${query}left`; 
        query = '';
        return this; 
      },
      
      get ar(){
        clz += ` ${alignPrefix}${query}right`; 
        query = '';
        return this; 
      },
      
      get asc(){
        clz += ` ${alignSelfPrefix}${query}center`; 
        query = '';
        return this; 
      },
      
      get ass(){
        clz += ` ${alignSelfPrefix}${query}start`; 
        query = '';
        return this; 
      },
      
      get ase(){
        clz += ` ${alignSelfPrefix}${query}end`; 
        query = '';
        return this; 
      },
      
      get asl(){
        clz += ` ${alignSelfPrefix}${query}left`; 
        query = '';
        return this; 
      },
      
      get asr(){
        clz += ` ${alignSelfPrefix}${query}right`; 
        query = '';
        return this; 
      },
      
      get jcb(){
        clz += ` ${justifyContentPrefix}${query}between`; 
        query = '';
        return this; 
      },
      
      get jcs(){
        clz += ` ${justifyContentPrefix}${query}start`;
        query = ''; 
        return this; 
      },
      get jce(){
        clz += ` ${justifyContentPrefix}${query}end`;
        query = ''; 
        return this; 
      },
      get jca(){
        clz += ` ${justifyContentPrefix}${query}around`; 
        query = ''; 
        return this; 
      },

      get jcc(){
        clz += ` ${justifyContentPrefix}${query}center`;
        query = ''; 
        return this; 
      },

      get nti(){
        clz += ' no-tab-index'; 
        return this; 
      },
      
      get r(){
        clz += ` flex-${query}row`; 
        query = ''; 
        return this; 
      },
      get c(){
        clz += ` flex-${query}column`;
        query = ''; 
        return this; 
      },
      
      get gr(){
        clz += ' row'; 
        return this; 
      },
      
      get ng(){
        clz += ' no-gutters'; 
        return this; 
      },
      
      get gc(){
        clz += ' col'; 
        return this; 
      }, 
      get fw(){
        clz += ' flex-wrap'; 
        return this; 
      },
      
      col(columns:number){
        clz += ` col-${query}${columns}`; 
        query = ''; 
        return this; 
      },
      get make(){
        var temp = block;
        if (temp){
          if (el){
            temp = `${temp}__${el}`; 
          }
        }
        if (mod && temp){
          temp = `${temp}--${mod}`; 
        }else if (amod && temp){
          temp = `${temp} ${temp}--${amod}`;
        }
        clz += ` ${temp}`;
        el = '';
        block = ''; 
        mod = ''; 
        amod = ''; 
        return clz;
      },
      get be(){
        var temp = block;
        if (temp){
          if (el){
            temp = `${temp}__${el}`; 
          }
        }
        if (mod && temp){
          temp = `${temp}--${mod}`; 
        }else if (amod && temp){
          temp = `${temp} ${temp}--${amod}`;
        }
        clz += ` ${temp}`;
        mod = ''; 
        amod = ''; 
        var k = clz; 
        clz = '';  
        return k;
      },
      get bem(){
        var temp = block;
        if (temp){
          if (el){
            temp = `${temp}__${el}`; 
          }
        }
        if (mod && temp){
          temp = `${temp}--${mod}`; 
        }else if (amod && temp){
          temp = `${temp} ${temp}--${amod}`; 
        }
        clz += ` ${temp}`;
        el = '';
        mod = '';
        amod = '';
        var k = clz; 
        clz = '';  
        return k;
      }
    }     
}