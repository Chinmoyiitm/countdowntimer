function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Countdown Timer')
    .addItem('Open Sidebar', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('TimerSidebar')
    .setTitle('Countdown Timer');
  SpreadsheetApp.getUi().showSidebar(html);
}
