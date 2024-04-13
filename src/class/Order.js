
class Order{
    constructor(row, index){
      this.rowIndex = index + SHEET.order.row.data;
      this.url = row[SHEET.order.column.url - 1];
      this.checkDate = dayjs.dayjs(row[SHEET.order.column.checkDate - 1]);
      this.title = row[SHEET.order.column.title - 1];
      this.html = row[SHEET.order.column.html - 1];
    }
  
    isAcquired(){
      return this.checkDate.isSame(dayjs.dayjs(), 'days');
    }
  
    checkSite(){
  
      const content = UrlFetchApp.fetch(this.url).getContentText("utf-8");
      const title = Parser.data(content).from('<title>').to('</title>').build();
  
      const outList = [[
        dayjs.dayjs().format('YYYY/MM/DD HH:mm'),
        title,
        content.slice(0, 10000)
      ]];
      
      setList(SHEET.order, this.rowIndex, SHEET.order.column.checkDate, outList);
    }
  }