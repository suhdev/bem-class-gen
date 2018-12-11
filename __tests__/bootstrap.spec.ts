import { B } from "../src/bootstrap";

describe('bootstrap justify-content',()=>{
    it('should add justify-content-between',()=>{
        const clz = B();
        expect(clz.jcb.make).toContain('justify-content-between');
    });

    it('should add justify-content-around',()=>{
        const clz = B();
        expect(clz.jca.make).toContain('justify-content-around');
    });

    it('should add justify-content-center',()=>{
        const clz = B();
        expect(clz.jcc.make).toContain('justify-content-center');
    });

    it('should add justify-content-end',()=>{
        const clz = B();
        expect(clz.jce.make).toContain('justify-content-end');
    });

    it('should add justify-content-start',()=>{
        const clz = B();
        expect(clz.jcs.make).toContain('justify-content-start');
    });
});


describe('bootstrap align-items',()=>{
    it('should add align-items-center',()=>{
        const clz = B();
        expect(clz.ac.make).toContain('align-items-center');
    });

    it('should add align-items-end',()=>{
        const clz = B();
        expect(clz.ae.make).toContain('align-items-end');
    });

    it('should add align-items-start',()=>{
        const clz = B();
        expect(clz.as.make).toContain('align-items-start');
    });

    it('should add align-items-left',()=>{
        const clz = B();
        expect(clz.al.make).toContain('align-items-left');
    });

    it('should add align-items-right',()=>{
        const clz = B();
        expect(clz.ar.make).toContain('align-items-right');
    });

    
});

describe('bootstrap media query',()=>{
    it('should add column classes',()=>{
        const clz = B().x.col(12).s.col(8).m.col(4).l.col(3).make.split(/[\s]/g);
        expect(clz).toContain('col-xs-12');
        expect(clz).toContain('col-sm-8');
        expect(clz).toContain('col-md-4');
        expect(clz).toContain('col-lg-3');
    });
});