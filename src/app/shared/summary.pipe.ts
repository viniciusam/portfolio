import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {

    transform(value: string, length: number): string {
        if (!length) length = 90;
        
        if (value.length <= length)
            return value;
; 
        return value.substr(0, length) + "...";
    }

}
