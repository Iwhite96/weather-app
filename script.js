//http://api.weatherapi.com/v1/current.json?key=edc87da2c1a54f1abb013801243011&q=44320&aqi=no



const tempratureField = document.querySelector(".temp")
const locationField = document.querySelector(".time__location p")
const dateandTimeField = document.querySelector(".time__location span")
const conditionField = document.querySelector(".condition p")
const searchField = document.querySelector(".search__area")
const form = document.querySelector("form")

form.addEventListener("submit", searchForLocation)

let target = "Akron" 

const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=edc87da2c1a54f1abb013801243011&q=${targetLocation}&aqi=no`
   
    const res = await fetch(url)

    const data = await res.json()


    console.log(data)

    let  locationName = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_f 
    let condition = data.current.condition.text

    updateDetails(temp , locationName, time, condition)
}

function updateDetails(temp, locationName, time, condition){

    let splitDate = time.split(' ')[0]
    let splitTime = time.split(' ')[1]

    let currentDay = getDayName(new Date(splitDate).getDay()) 

    tempratureField.innerText = temp 
    locationField.innerText = locationName
    dateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`
    conditionField.innerText = condition

}

function searchForLocation(event) {
    event.preventDefault()

    target = searchField.value

    fetchResults(target)
}

fetchResults(target)

function getDayName(number){
    switch(number){
        case 0:
            return 'Sunday'
            case 1:
            return 'Monday'
            case 2:
            return 'Tuesday'
            case 3:
            return 'Wednesday'
            case 4:
            return 'Thursday'
            case 5:
            return 'friday'
             case 6:
            return 'Saturday'
            
    }
}