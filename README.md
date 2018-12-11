# bem-class-gen 

A utility object to generate BEM class names. The object also supports generating bootstrap 4 class names. 


## Usage 

```javascript

import {B} from 'bem-class-gen'; 

var clz = B().bl('some-block'); 
const clzBlockName = clz.bem;//sys-block 
const clzElementName = clz.el('test').bem; //sys-block__test
const clzModName = clz.el('test').mod('modifier').bem; //sys-block__test--modifier
const clzModName = clz.el('test').amod('modifier').bem; //sys-block__test sys-block__test--modifier

//bootstrap class names

const bootstrapMediaQuery = clz.s.col(12).l.col(6).bem ; //some-block col-sm-12 col-lg-6
const bootstrapJustityContent = clz.jcb.bem ; //justify content between
const bootstrapFlex = clz.flex.r.bem ; //sys-block d-flex flex-row 

```

