// Find The Current Date in js...

// let currentDate = function currentdate(){
//     let date = new Date();
//     return date;
// }

// console.log("Current Date Is::",currentDate());

class CurrentDate {
/**
 * This function returns the current date.
 * @return {Date} The current date.
 */
    getCurrentDate(){
        let date = new Date();
        return date;
    }
}

// let cd = new CurrentDate();
// console.log(cd.getCurrentDate(),"Current Date Is");

// Another class to find the date related calculations
class Datemanipulation {    
    
    constructor() {
        this.currentDate = new Date();    
    }

    printCurrentDate(){
        console.log(`Current Date Is:${this.currentDate}`);
    }

    getFutureDate(dateToAdd){
        let date = new Date(this.currentDate);

        let nextDate = new Date();
        nextDate = (date.setDate(date.getDate() + dateToAdd));
        return date.toDateString();
    }

    getPastDate(dateToMinus){
        let date = new Date(this.currentDate);
        (date.setDate(date.getDate() - dateToMinus));
        return date.toDateString();
    }
}

// const datetime = new Datemanipulation();
// datetime.printCurrentDate();
// console.log(`Next Date From The Current Date Is :  ${datetime.getFutureDate(7)}`);
// console.log(`Few Previous Date From The Current Date Is ${datetime.getPastDate(30).toString()}`);


// set time as 00:00:00:00

class SetexectTime{     
    constructor(currentDate = new Date()) {  
        this.setTime = new Date(currentDate);  
    }

    printCurrentDate(){
        console.log(`Current Date Is:${this.setTime}`);
    }

    /**
     * Set the time to 00:00:00:00
     * @returns {Date} A new Date object with the time set to 00:00:00:00
     */
    setTimeToZero(){
        let time = new Date(this.setTime);
        time.setHours(0,0,0,0);
        return time;
    }
    formattedDate(parameter){
        let today = new Date(this.setTime);
        let yyyy = today.getFullYear();
        let yy = yyyy.toString().slice(-2);
        let mm = String(today.getMonth()+1);
        let dd = String(today.getDate());
        console.log("Year and month is:",yyyy,yy,mm,dd);
        if(parameter === 'Y-M-D'){
            let YMD = today.toISOString().split('T')[0];
            return YMD;
        }
        if(parameter === 'M-D-Y'){
            return `${mm}-${dd}-${yyyy}`;
        }
        if(parameter === 'SHORT'){
            let month = today.toLocaleString('default',{month:'short'});
            return `${month}-${dd}-${yy}`;
        }
    }

    findDayFromWeek(){
        const days = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day = this.setTime.getDay();
        return days[day];
    }

    formatDateToObject(){
        return new Date(this.setTime);
    }
    getDay
    
}

// let setexecTime = new SetexectTime("2022-02-01");
// console.log(setexecTime.setTimeToZero(),"Set Exectly Time::");
// console.log("Formatted Date is::",setexecTime.formattedDate('SHORT'));
// console.log("Formatted Date Object is :",setexecTime.formatDateToObject());
// let myObj = setexecTime.formatDateToObject();
// console.log("3. Pure Object Type:", typeof myObj, "-", myObj.getFullYear());
// console.log("Week Day is ::",setexecTime.findDayFromWeek());




// Need To find the day for a specific date.
class findDate{
    constructor(date = new Date()) {
        this.date = new Date(date);
    }
    getTheDayFromADate(){
        let weekDatys = ['sunday','Monday','Tuesday','WednesDay','Thrsday','Frinday','Saturday'];
        let dayNo = this.date.getDay();
        let monthNo = this.date.getMonth()+1;
        console.log("no of the day is :",dayNo+1);
        console.log("Month no is:",monthNo);
        return weekDatys[dayNo];
    }

    checkLeapYearOrNot(){
        let getYear = this.date.getFullYear();
        console.log("Year is ::",getYear); 
        if (getYear % 400 === 0) {return true}
        if (getYear % 100 === 0) {return false};
        return getYear % 4 === 0;
    }

    getTheNumberOfParticularMonth(){
        let month = this.date.getMonth()+1;
        let year = this.date.getFullYear();
        console.log(month,year);
        let leapYearOrNot = (year % 400 === 0) ? true : (year % 100===0) ? false : (year % 4 ===0) ? true : false;
        let thirtyMonth =
            month === "4" || month === "6" || month === "9" || month === "11"
                ? 30
                : month === 2
                    ? leapYearOrNot
                        ? 28
                        : 29
                    : 31;
        console.log(thirtyMonth,"oooo");
        if(leapYearOrNot && month === 2){
            thirtyMonth+=1;
        }
        return thirtyMonth; 
    }

    compareTwoDate(firstDate,secoundDate){
        return firstDate > secoundDate ? firstDate : secoundDate;
    }

    firstDayOfCurrentMonth(date = new Date()){
        let getDate = new Date(date);
        
        // let setCurrentDate = new Date(
        //     getDate.getFullYear(),
        //     getDate.getMonth(),0)
        // console.log("Set Current Date::",setCurrentDate);
        return new Date(getDate.setDate(1));
    }

    getLastDayOfTheMonth(date = new Date()){
        let getLastDay = new Date(date);
        // getLastDay.setHours(23,59,59);
        // let LastDay = new Date(
        //                     getLastDay.getFullYear(),
        //                     getLastDay.getMonth()+1,
        //                     1);

            getLastDay.setMonth(getLastDay.getMonth() + 1, 0);
            getLastDay.setHours(23, 59, 59, 999);
        return getLastDay;
    }

    getAddedHourToCurrentTime(date = new Date(), hour) {
        let getTime = new Date(date);
        getTime.setHours(getTime.getHours() + hour)
        return getTime;
    }

    substractMinutes(date = new Date(),minutes=15){
        let getSubstractedMinutes = new Date (date);
        getSubstractedMinutes.setMinutes(getSubstractedMinutes.getMinutes() - minutes);
        return getSubstractedMinutes;
    }

    addDaysToCurrentDays(noOfDays,date= new Date()){
        date.setDate(date.getDate()+noOfDays);
        return date;
    }

}

const findday = new findDate('2026-02-12');

console.log("Day No Is::",findday.getTheDayFromADate());

console.log("Year is :",findday.checkLeapYearOrNot());

console.log("Total day of this month is :",findday.getTheNumberOfParticularMonth());

console.log("Bigger Date Is:",findday.compareTwoDate('2024-12-11','2025-12-12'));

console.log("First Day of The current month is :",findday.firstDayOfCurrentMonth('2026-02-12'));

console.log("Last day of the updated month is :",findday.getLastDayOfTheMonth('2026-03-12').toString());

console.log("Time Is After Adding Few Hours:",findday.getAddedHourToCurrentTime('2026-03-12',6).toString());

console.log("Substracted Minutes From Exact Time Is:",findday.substractMinutes('2026-03-12', 15).toString());

console.log("After Adding Few Days to currentDays",findday.addDaysToCurrentDays(10));


 