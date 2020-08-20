const { success,
    fail,
    repair,
    get,} = require('./enhancer.js');
// test away!

describe("item's durability and enhancement", () =>{
    describe("repair", () => {
        it('to check if an item is repaired or durable', () => {
            expect(repair({
                name: "game",
                enhancement: 15,
                durability: 70
            })).toEqual({
                name: "game",
                enhancement: 15,
                durability: 100
            });
        });
        let o = {
            name: "game",
            enhancement: 15,
            durability: 70
        };
        it('to check if new object is being returned', () => {
            expect(repair(o)).not.toBe(o)
        });
        it('to check if original object is not modified', () => {
            repair(o);
            expect(o).toEqual({
                name: "game",
                enhancement: 15,
                durability: 70
            })
        })
    });
    describe("success", () => {
        let o = {
            name: "game",
            enhancement: 15,
            durability: 70
        };
        it('to check if new object is being returned', () => {
            expect(success(o)).not.toBe(o)
        });
        it('to check if original object is not modified', () => {
            success(o);
            expect(o).toEqual({
                name: "game",
                enhancement: 15,
                durability: 70
            })
        })
        it('to check if an item is enhanced or successful', () => {
            expect(success(o)).toEqual({...o, enhancement: o.enhancement + 1});
            // expect({enhancement: 20}).toEqual({enhancement: 20});
        });
        it('to check if max enhancement is 20', () => {
            expect(success({...o, enhancement: 20})).toEqual({...o, enhancement: 20});
        });
    });
    describe("fail", () => {
        let o = {
            name: "game",
            enhancement: 15,
            durability: 70
        };
        it('to check if new object is being returned', () => {
            expect(fail(o)).not.toBe(o)
        });
        it('to check if original object is not modified', () => {
            fail(o);
            expect(o).toEqual({
                name: "game",
                enhancement: 15,
                durability: 70
            })
        })
        it('to check if enhancement is decreased', () => {
            expect(fail({...o, enhancement: 18})).toEqual({...o, enhancement: 17, durability: 60});
        })
        it('to check if an item durability is decreased', () => {
            expect(fail({...o, enhancement: 16})).toEqual({...o, enhancement: 16, 
                durability: o.durability - 10});
        })
        it('to check if an item is failed or enhancement is decreased', () => {
            expect(fail(o)).toEqual({...o, durability: o.durability - 10});
        })
        it("to check if an item's durability is decreased", () => {
            expect(fail({...o, enhancement: 14})).toEqual({...o, enhancement: 14,
                    durability: o.durability - 5});
        })
    });
});