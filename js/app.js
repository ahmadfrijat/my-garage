var myForm=document.getElementById('myForm')
var table=document.getElementById('table')
var allCars = [];
var carsImg=[
    'bmw.png',
    'chevrolet.png',
    'hyundai.png',
    'kia.png',
    'lexus.png',
    'tesla.png',
    'toyota'

]

function Car(name,category,year) {

    this.name=name ;
    this.category=category;
    this.year=year;
    allCars.push(this)
    
}

Car.prototype.renderTable=function () {

var firstRow = document.createElement('tr')

var carImg= document.createElement('td')
carImg.textContent= this.category;
var carName= document.createElement('td')
carName.textContent= `Car name : ${this.name} 
Model Year : ${this.year}`

firstRow.appendChild(carImg)
firstRow.appendChild(carName)

table.appendChild(firstRow)
}



myForm.addEventListener('submit',function (event) {
    event.preventDefault();

    var name = event.target.name.value;
    var category = event.target.category.value;
    var year = event.target.year.value;
    var newCar = new Car (name,category,year)
    newCar.renderTable();
    localStorage.setItem('newCarModel',JSON.stringify(allCars))
})

function getItems() {
    if (localStorage.getItem('newCarModel')) {
        var objLS= JSON.parse(localStorage.getItem('newCarModel'))
        for (let index = 0; index < objLS.length; index++) {
            var renderAllCars= new Car(objLS[index].name,objLS[index].category,objLS[index].year)
        
            renderAllCars.renderTable()
        }
    }
    
    
}
getItems() 