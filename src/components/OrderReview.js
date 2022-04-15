import { item_array } from './ProductItems'

export function OrderReview () {
    var statement = "";
    if (item_array.length == 0){
        statement = "You have not selected an item yet";
    }
    else if (item_array.length == 2){
        var name1 = item_array[0].name;
        var name2 = item_array[1].name;
        statement = `${item_array[0].name}` + ' + ' +`${item_array[1].name}`;
    }
    else {
        statement = `${item_array[0].name}`;
    }

    return statement;
    }
