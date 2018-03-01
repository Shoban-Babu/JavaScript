/**********************************************************
Helper File to Read Excel sheets
Framework : Protractor Automation Framework
Created By: CMT SAT Team
**********************************************************/
var ExcelFunctions = function() {
    var XLSX = require('../node_modules/xlsx');

    /* To be used to get browser information */
    this.getSpecs = function () {
        try {
            var workbook = XLSX.readFile('../RunManager.xlsx');
            var worksheet = workbook.Sheets['DATA'];
            var browser = 'chrome';
            var testCaseName = '';
            var executionCellAddress = 'B';
            var testCaseNameCellAddress = 'A';
            var count=1;
            var testCaseCount=0;
            var testCaseExecutionCount=0;
            var testCase = '';

            for(var i=2;i>0;i++){
                testCaseNameCellAddress = 'A';
                testCaseNameCellAddress=testCaseNameCellAddress+i;
                if (worksheet[testCaseNameCellAddress] != undefined && worksheet[testCaseNameCellAddress].v != '') {
                    testCaseCount++;
                }else{
                    break;
                }
            }

            for(var j=2;j<=testCaseCount+1;j++){
                executionCellAddress='B';
                executionCellAddress=executionCellAddress+j;
                if (worksheet[executionCellAddress].v=='Yes') {
                    testCaseExecutionCount++;
                }
            }
            if(testCaseExecutionCount==1){
                for(var j=2;j<=testCaseCount+1;j++){
                    executionCellAddress='B';
                    executionCellAddress=executionCellAddress+j;
                    if (worksheet[executionCellAddress].v=='Yes') {
                        testCaseName = worksheet['A'+j].v;
                       testCase=testCaseName;
                    }
                }
            }else{
                for(var k=2;k<=testCaseCount+1;k++){
                    executionCellAddress='B';
                    executionCellAddress=executionCellAddress+k;
                    if (worksheet[executionCellAddress].v=='Yes') {
                        testCaseName = worksheet['A'+k].v;
                        if(k!=testCaseCount+1){
                            testCase=testCase+testCaseName+",";

                        }else{
                            testCase=testCase+testCaseName;
                        }
                    }
                }
                testCase="{"+testCase+"}";
            }

           return testCase;
        } catch (err) {
            console.log('Exception in excelfunctions - getSpecs' + err);
            return err;
        }
    }

    function charVal(ascii) {
        return String.fromCharCode(ascii);
    }


    this.getValue = function (testCaseName,columnName) {
        try {
            var workbook = XLSX.readFile('../DataSheet.xlsx');
            var worksheet = workbook.Sheets['DATA'];
            var executionCellAddress = '';
            var testCaseNameCellAddress = '';
            var testCaseCnt=0;
            var value='';
            for(var i=2;i>0;i++){
                testCaseNameCellAddress = 'A';
                testCaseNameCellAddress=testCaseNameCellAddress+i;
                if (worksheet[testCaseNameCellAddress] != undefined && worksheet[testCaseNameCellAddress].v != '') {
                    testCaseCnt++;
                }else{
                    break;
                }
            }

            for (i = 2; i <= testCaseCnt + 1; i++) {
                testCaseNameCellAddress = 'A';
                testCaseNameCellAddress = testCaseNameCellAddress + i;
                if (worksheet[testCaseNameCellAddress].v == testCaseName) {
                    for (j = 65; j <= j + 2; j++) {
                        if (worksheet[charVal(j) + 1].v == columnName) {
                            value=worksheet[charVal(j) + i].v;
                            break;
                        }
                    }
                }
            }
            return value;


        }catch(err){
            console.log('Exception in excelfunctions - getSpecs' + err);
            return err;
        }
    }
};

module.exports = new ExcelFunctions();
