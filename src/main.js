function main() {
    getOrderList().forEach(order => {
      if(order.isAcquired()) return;
      order.checkSite();
    });
  }
  