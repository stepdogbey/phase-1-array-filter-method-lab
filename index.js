// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, nameSearch){
    return drivers.filter(nameOfDriver => nameOfDriver.toLowerCase() == nameSearch.toLowerCase())
    }

    
function fuzzyMatch(drivers, nameSearch){
    return drivers.filter(nameOfDriver => nameOfDriver.startsWith(nameSearch) )
    }

    
function matchName(drivers, nameSearch){
    return drivers.filter(nameOfDriver => nameOfDriver.name === nameSearch)
    }

