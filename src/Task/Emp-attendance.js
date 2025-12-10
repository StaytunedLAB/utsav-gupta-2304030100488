

function processAttendance(input) {
    let summary = {
        employeeId: input.employeeId,
        date: input.date,
        status: "",
        totalWorkingMinutes: 0,
        overtimeMinutes: 0,
        note: "",
        errorMessage: ""
    };

    try {
       
        if (!input.checkIn || !input.checkOut) {
            summary.status = "incomplete";
            summary.note = "Missing check-in or check-out time";
            return summary;  
        }

      
        let checkInTime = new Date(`${summary.date} ${input.checkIn}`);
        let checkOutTime = new Date(`${summary.date} ${input.checkOut}`);

      
        if (isNaN(checkInTime) || isNaN(checkOutTime)) {
            summary.status = "error";
            summary.errorMessage = "Invalid time format";
            summary.note = "Could not convert check-in or check-out time";
            return summary;
        }

       
        let breakMinutes = 0;

        if (input.breakStart) {
            if (input.breakEnd) {
                let breakStart = new Date(`${summary.date} ${input.breakStart}`);
                let breakEnd = new Date(`${summary.date} ${input.breakEnd}`);

                if (!isNaN(breakStart) && !isNaN(breakEnd)) {
                    breakMinutes = (breakEnd - breakStart) / (1000 * 60);
                } else {
                    breakMinutes = 30; 
                }
            } else {
                breakMinutes = 30;
            }
        }

       
        let totalMinutes = (checkOutTime - checkInTime) / (1000 * 60) - breakMinutes;

        if (totalMinutes < 0) {

        summary.status = "invalid";
        summary.note = "Negative working time detected";
       summary.totalWorkingMinutes = 0;
         return summary;

        }

   summary.totalWorkingMinutes = Math.max(0, Math.floor(totalMinutes));
    summary.status = "complete";
    summary.note = "Attendance calculated successfully";

        
            if (input.overtimeApproved === true && summary.totalWorkingMinutes > 480) {
            summary.overtimeMinutes = summary.totalWorkingMinutes - 480;
        }

          } 
          catch (err) {
           summary.status = "error";
           summary.errorMessage = err.message;
          summary.note = "Unexpected error occurred";
    } 
    finally {
         console.log("Attendance processed successfully");
    }

    return summary;
}


         const inputData = {
    employeeId: "E101",
    date: "09-12-2025",
    checkIn: "11:00",
    checkOut: "04:00",
    breakStart: "01:00",
    breakEnd: "02:00",
    overtimeApproved: true
};

console.log(processAttendance(inputData));
