'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3 +
     * calc(3).add(5).v // 8 +
     * calc(3).minus(2).v // 1 +
     * calc(4).sqrt().v // 2 +
     * calc(3).times(10).v // 30 +
     * calc(10).divide(2).v // 5 +
     * calc(10).mod(5).v // 0 +
     * calc(5).divide(0) // throw error +
     * calc(-3).sqrt() // throw error +
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator

    it('should have proper initial value', () => {
        const c = calc(3);
        expect(c.v).to.equal(3);
    });

    it('should support add operation', () => {
        // Given
        let c = calc(3);
        // When
        c = c.add(5);
        // Then
        expect(c.v).to.equal(8);
    });

    it('should support substract operation', () => {
        // Given
        let c = calc(3);
        // When
        c = c.minus(2);
        // Then
        expect(c.v).to.equal(1);
    });

    it('should support sqrt operation', () => {
        // Given
        let c = calc(4);
        // When
        c = c.sqrt();
        // Then
        expect(c.v).to.equal(2);
    });

    it('should support times operation', () => {
        // Given
        let c = calc(3);
        // When
        c = c.times(10);
        // Then
        expect(c.v).to.equal(30);
    });

    it('should support divide operation', () => {
        // Given
        let c = calc(10);
        // When
        c = c.divide(2);
        // Then
        expect(c.v).to.equal(5);
    });

    it('should support modulo operation', () => {
        // Given
        let c = calc(10);
        // When
        c = c.modulo(5);
        // Then
        expect(c.v).to.equal(0);
    });

    //...

    it('should throw error in case of division by 0', () => {
        // Given
        let c = calc(3);
        // When + Then
        expect(() => c.divide(0)).to.throw;
    });

    it('should throw error in case of sqrt from -3', () => {
        // Given
        let c = calc(-3);
        // When + Then
        expect(() => c.sqrt(0)).to.throw;
    });

    it('should support complex operation', () => {
        let c = calc(3);
        
        c = c.add(4);
        c = c.minus(3);
        c = c.substract(6);
        
        expect(c.v).to.equal(24);
    });

    //...
});