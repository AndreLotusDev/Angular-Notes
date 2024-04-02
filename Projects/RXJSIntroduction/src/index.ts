import { FilterOperator } from "./filterOperator";
import { MapOperator } from "./mapOperator";
import { SwitchMap } from "./switchMap";

function component() {
    let switchMapHandler = new SwitchMap();

    switchMapHandler.execute();

    let mapOperator = new MapOperator();
    mapOperator.getPowFromSourceNumbers();

    let filterOperator = new FilterOperator();
    filterOperator.getOddNumbersFromSource();
}

component();