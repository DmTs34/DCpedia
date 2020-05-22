"use strict";

(function () {

    //holds the event
    var eventResult;
    //load of web tool
    var wt = new HS_DC_CALCTOOL_WEBAPP();

    // The initialize function must be run each time a new page is loaded.
    Office.initialize = function (reason) {
      $(document).ready(function () {
          (async () => {
              await wt.loadData;
              await () => {
                  if (wt.successLoad === false) {
                      loadContentMain("fail");
                  } else {
                      loadContentMain("success");
                  }
              }
          })();   
          //tryCatch(wt.loadData);
          console.log(wt)
          

          tryCatch(addSelectionChange);//Add event handler for any selectionchange

          //button removes event handler
          $('#monitorItems').click(function () {
              tryCatch(eventHandlerToggle)
          })
      });
    };

    //function activates the screening or de-activates screening
    function eventHandlerToggle() {
        if (eventResult == undefined || eventResult == null) {
            $('#monitorItems').text("De-activate monitoring")
            tryCatch(addSelectionChange)
        } else {
            $('#monitorItems').text("Activate monitoring")
            tryCatch(removeEventResult)
        }
    }
    //Adds onSelectionChanged to the active worksheet
    function addSelectionChange() {
       
        Excel.run(function (context) {
                eventResult = context.workbook.onSelectionChanged.add(readAddress);
            return context.sync().then(function () {
                    console.log("HS_DC_CalcTool_webapp: Event handler succesfully registered!")
                    });
        }).catch(function (error) {
            console.error("HS_DC_CalcTool_webapp: error in addSelectionChange function",error)
        })
    }
    //reads the value of the cell
    async function readAddress(event) {
        await Excel.run(async (context) => {
            let myWorkbook = context.workbook;
            let sheet = context.workbook.worksheets.getActiveWorksheet();
            let activeCell = myWorkbook.getActiveCell();
            activeCell.load("values");
            sheet.load("name");
            await context.sync();
            let c = activeCell.values[0][0],
                a = wt.detect(c);
            $('#cellValue').text(c);
            $('#itemNumber').text(a.itemNumber);
            $('#descrCode').text(a.descrCode);
            $('#imgPreview').attr("src","https://dmts34.github.io/DCpedia/images/images/" + a.strInput+"/1.png")
        })
    }
    //removes the event handler from
    function removeEventResult() {
        return Excel.run(eventResult.context, function (context) {
            eventResult.remove();
            return context.sync()
                .then(function () {
                    eventResult = null;
                    console.log("HS_DC_CalcTool_webapp: Event handler successfully removed");
                });
        }).catch(function (error) {
            console.error("HS_DC_CalcTool_webapp: Error in remove event handler function", error)
        });
    }

    function loadContentMain(success) {
        switch (success) {
            case "fail":
                $('#content-main-fail').show()
                $('#content-main-success').hide()
                break;
            case "success":
                $('#content-main-fail').hide()
                $('#content-main-success').show()
                break;
        }
    }


    /** Default helper for invoking an action and handling errors. */
    async function tryCatch(callback) {
        try {
            await callback();
        } catch (error) {
            // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
            console.error("HS_DC_CalcTool_webapp_error:", error);
        }
    }

})();
