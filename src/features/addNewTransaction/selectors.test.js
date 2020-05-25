//own
import { selectOnlyFloatNumberString } from './selectors'

describe('selectOnlyFloatNumberString', () => {
    it('returns stable float number-like string', () => {
        expect(selectOnlyFloatNumberString('{} + [] # +_)(*&^%$#@!":Lsdvfbbn) {}')).toBe('')
        expect(selectOnlyFloatNumberString('1 2 3 {} + [] # +_)(*&^%$#@!":Lsdvfbbn) {}')).toBe('123')
        expect(selectOnlyFloatNumberString('123{} + [] ;%')).toBe('123')
        expect(selectOnlyFloatNumberString('    123  {} + [] ; %  ')).toBe('123')
        expect(selectOnlyFloatNumberString('{} + [] 123')).toBe('123')
        expect(selectOnlyFloatNumberString('{} + [] 1,23')).toBe('1.23')
        expect(selectOnlyFloatNumberString('1,23 {} + [] ')).toBe('1.23')
        expect(selectOnlyFloatNumberString(' 1,23 ')).toBe('1.23')
        expect(selectOnlyFloatNumberString(',123')).toBe('0.123')
        expect(selectOnlyFloatNumberString('.123')).toBe('0.123')
        expect(selectOnlyFloatNumberString('0123')).toBe('123')        
        expect(selectOnlyFloatNumberString('000001,23')).toBe('1.23')
        expect(selectOnlyFloatNumberString('0000,1,2,3')).toBe('0.123')
        expect(selectOnlyFloatNumberString('0000012,3,4,50')).toBe('12.3450')
        expect(selectOnlyFloatNumberString('1 2 3')).toBe('123')
        expect(selectOnlyFloatNumberString('1 2 ,3')).toBe('12.3')        
        expect(selectOnlyFloatNumberString('1,2,3,4')).toBe('1.234')
        expect(selectOnlyFloatNumberString(',123,')).toBe('0.123')
        expect(selectOnlyFloatNumberString('1.2.3.4.5.6')).toBe('1.23456')
        expect(selectOnlyFloatNumberString('1.......2...........3......')).toBe('1.23')
        expect(selectOnlyFloatNumberString('....1.......2...........3......')).toBe('0.123')
    })
})
