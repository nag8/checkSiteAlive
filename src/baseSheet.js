function getSheetData(sheetConfig){
    let data = getSheetDataFull(sheetConfig);
    [...Array(sheetConfig.row.data - 1)].forEach(_ => data.shift());
    return data;
  }
  
  function getSheetDataFull(sheetConfig){
    const sheet = SpreadsheetApp.getActive().getSheetByName(sheetConfig.name);
    return sheet.getDataRange().getValues();
  }
  
  
  function setList(sheetConfig, row, column, list){
    if(!list.length) return;
    const sheet = SpreadsheetApp.getActive().getSheetByName(sheetConfig.name);
    sheet.getRange(row, column, list.length, list[0].length).setValues(list);
  }