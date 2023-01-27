const list = document.getElementById('list');

for(let i = 1; i <= 100; i++) {

    const item = document.createElement("li");

    item.innerHTML = i;
    item.classList.add("box");

    list.append(item);

    if((i % 3 == 0) && (i % 5 == 0)) {
        item.innerHTML = "fizzbuzz";
        item.classList.add("fizz-buzz");

    } else if(i % 3 == 0) {
        item.innerHTML = "fizz";
        item.classList.add("fizz");
        
    } else if(i % 5 == 0) {
        item.innerHTML = "buzz";
        item.classList.add("buzz");
    }




}