
import { debounceTime, delay, fromEvent, map } from "rxjs";

export class ObservableEvents  {
    
    executeOnMouseMove() {
        let observable = fromEvent(document, 'mousemove');
        
        observable

        .pipe(
            map((e: MouseEvent) => {
                return {
                    x: e.clientX,
                    y: e.clientY
                };
            }),
            debounceTime(1000)
        )
        .subscribe((e: MousePositionXY) => {
            console.log(e);
        });
    }

    makeRedDotFollowMouseWithDelay() {
        let observable = fromEvent(document, 'mousemove');
        
        observable
        .pipe(
            map((e: MouseEvent) => {
                return {
                    x: e.clientX,
                    y: e.clientY
                };
            }),
            delay(300)
        )
        .subscribe((e: MousePositionXY) => {
            let dot = document.querySelector('.dot') as HTMLElement;
            console.log(dot);

            dot.style.left = e.x + 'px';
            dot.style.top = e.y + 'px';
        });
    }
}

interface MousePositionXY {
    x: number
    y: number
}