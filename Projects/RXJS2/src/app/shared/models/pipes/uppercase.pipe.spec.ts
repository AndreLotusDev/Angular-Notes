import { UpperCase } from './uppercase.pipe';
import { TestBed } from '@angular/core/testing';

describe('UpperCasePipe', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UpperCase]
        });
    });

    it('should transform everything to uppercase', () => {
        const pipe = new UpperCase();
        expect(pipe.transform('text')).toEqual('TEXT');
    });
});