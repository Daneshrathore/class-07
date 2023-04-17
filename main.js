var product = prompt("Laptop, Mobile, Smart Watch, Power Bank, Other,");
if(product === null){
    console.log("type something")
} else if(product === ""){
    console.log("type something")
}
else if (product === "Laptop") {
    console.log("HP Spectre x360 15 , Dell XPS 15. HP");
} else if (product === "Mobile") {
    console.log("SAMSUNG, APPLE, HUAWEI, NOKIA");
} else if (product === "Power Bank") {
    console.log("Croma 100000 mAh, Ambrane 100000 mAh");
} else if (product === "other") {
    var other = prompt("enter product price")
    console.log("no product is available at this price. Please wait... We will let you know when any product is avaiable in our budget.")
} else {
    console.log("out of list")
}