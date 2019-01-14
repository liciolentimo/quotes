import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

	 transform(value: any): number {
	    let timeNow:Date = new Date(); 
	    let uploadTime:any = new Date(timeNow.getFullYear(),timeNow.getMonth(),timeNow.getDate());
	    var dateDifference =Math.abs(value-uploadTime ); //The abs() method returns the absolute value of a number
	    const secondsInADay= 86400; // Converts the function to time format

	    var dateDifferenceInSeconds=dateDifference*0.001; 

	    var dateCounter = dateDifferenceInSeconds/secondsInADay;



	    if(dateCounter >= 1){
	    	return dateCounter;
	    }else{
	    	return 0;
	    }
	}

}
