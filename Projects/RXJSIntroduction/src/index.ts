import { Operators } from "./operators";
import { ObservableEvents } from "./observableEvents";

function component() {
    // let operators = new Operators();

    // console.log('filtering');
    // operators.filterByEvenNumbers();

    // console.log('pow by 2');
    // operators.powBy2Numbers();

    let observableFromEvents = new ObservableEvents();
    // console.log('mouse on event');
    // observableFromEvents.executeOnMouseMove();

    console.log('mouse on event with delay');
    observableFromEvents.makeRedDotFollowMouseWithDelay();
}

component();