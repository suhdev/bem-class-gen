"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alignPrefix = 'align-items-';
var alignSelfPrefix = 'align-self-';
var justifyContentPrefix = 'justify-content-';
function B(base) {
    if (base === void 0) { base = ''; }
    var clz = base + ' ';
    var block = '';
    var el = '';
    var mod = '';
    var amod = '';
    // var amode = ''; 
    var query = '';
    return {
        icon: function (i) {
            return 'sys-icon-' + i;
        },
        bl: function (b) {
            block = b.trim();
            return this;
        },
        el: function (b) {
            el = b.trim();
            return this;
        },
        mod: function (m) {
            mod = m.trim();
            return this;
        },
        amod: function (m) {
            amod = m.toString();
            return this;
        },
        add: function (c) {
            clz += ' ' + c;
            return this;
        },
        get flex() {
            clz += ' d-flex';
            return this;
        },
        get inflex() {
            clz += ' d-inline-flex';
            return this;
        },
        get x() {
            query = 'xs-';
            return this;
        },
        get rr() {
            clz += " flex-" + query + "row-reverse";
            query = '';
            return this;
        },
        get s() {
            query = 'sm-';
            return this;
        },
        get m() {
            query = 'md-';
            return this;
        },
        get l() {
            query = 'lg-';
            return this;
        },
        get xl() {
            query = 'xl-';
            return this;
        },
        get ac() {
            clz += " " + alignPrefix + query + "center";
            query = '';
            return this;
        },
        get as() {
            clz += " " + alignPrefix + query + "start";
            query = '';
            return this;
        },
        get asst() {
            clz += " " + alignPrefix + query + "stretch";
            query = '';
            return this;
        },
        get ae() {
            clz += " " + alignPrefix + query + "end";
            query = '';
            return this;
        },
        get al() {
            clz += " " + alignPrefix + query + "left";
            query = '';
            return this;
        },
        get ar() {
            clz += " " + alignPrefix + query + "right";
            query = '';
            return this;
        },
        get asc() {
            clz += " " + alignSelfPrefix + query + "center";
            query = '';
            return this;
        },
        get ass() {
            clz += " " + alignSelfPrefix + query + "start";
            query = '';
            return this;
        },
        get ase() {
            clz += " " + alignSelfPrefix + query + "end";
            query = '';
            return this;
        },
        get asl() {
            clz += " " + alignSelfPrefix + query + "left";
            query = '';
            return this;
        },
        get asr() {
            clz += " " + alignSelfPrefix + query + "right";
            query = '';
            return this;
        },
        get jcb() {
            clz += " " + justifyContentPrefix + query + "between";
            query = '';
            return this;
        },
        get jcs() {
            clz += " " + justifyContentPrefix + query + "start";
            query = '';
            return this;
        },
        get jce() {
            clz += " " + justifyContentPrefix + query + "end";
            query = '';
            return this;
        },
        get jca() {
            clz += " " + justifyContentPrefix + query + "around";
            query = '';
            return this;
        },
        get jcc() {
            clz += " " + justifyContentPrefix + query + "center";
            query = '';
            return this;
        },
        get nti() {
            clz += ' no-tab-index';
            return this;
        },
        get r() {
            clz += " flex-" + query + "row";
            query = '';
            return this;
        },
        get c() {
            clz += " flex-" + query + "column";
            query = '';
            return this;
        },
        get gr() {
            clz += ' row';
            return this;
        },
        get ng() {
            clz += ' no-gutters';
            return this;
        },
        get gc() {
            clz += ' col';
            return this;
        },
        get fw() {
            clz += ' flex-wrap';
            return this;
        },
        col: function (columns) {
            clz += " col-" + query + columns;
            query = '';
            return this;
        },
        get make() {
            var temp = block;
            if (temp) {
                if (el) {
                    temp = temp + "__" + el;
                }
            }
            if (mod && temp) {
                temp = temp + "--" + mod;
            }
            else if (amod && temp) {
                temp = temp + " " + temp + "--" + amod;
            }
            clz += " " + temp;
            el = '';
            block = '';
            mod = '';
            amod = '';
            return clz;
        },
        get be() {
            var temp = block;
            if (temp) {
                if (el) {
                    temp = temp + "__" + el;
                }
            }
            if (mod && temp) {
                temp = temp + "--" + mod;
            }
            else if (amod && temp) {
                temp = temp + " " + temp + "--" + amod;
            }
            clz += " " + temp;
            mod = '';
            amod = '';
            var k = clz;
            clz = '';
            return k;
        },
        get bem() {
            var temp = block;
            if (temp) {
                if (el) {
                    temp = temp + "__" + el;
                }
            }
            if (mod && temp) {
                temp = temp + "--" + mod;
            }
            else if (amod && temp) {
                temp = temp + " " + temp + "--" + amod;
            }
            clz += " " + temp;
            el = '';
            mod = '';
            amod = '';
            var k = clz;
            clz = '';
            return k;
        }
    };
}
exports.B = B;
