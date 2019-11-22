 function tableToExcel(){
    // 要导出的数据
    var testData = [];
    // 列标题
    var str = '<tr><td>用户姓名</td><td>用户电话</td></tr>';
        // 循环遍历，每行加入tr标签，每个单元格加td标签
    for (let i = 0, len = testData.length; i < len; ++i){
        str += '<tr>';
        for (let item in testData[i]){
            // 增加\t为了不让表格显示科学计数法或者其他格式
            str += `<td>${ testData[i][item] + '\t'}</td>`;
        }
        str += '</tr>';
    }

    // Worksheet名
    var worksheet = 'Sheet1';
    var uri = 'data:application/vnd.ms-excel;base64,';
    // 下载的表格模板数据
    var template = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
        xmlns:x="urn:schemas-microsoft-com:office:excel" 
        xmlns="http://www.w3.org/TR/REC-html40">
        <head><meta charset='utf-8' /><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
        <x:Name>${worksheet}</x:Name>
        <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
        </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
        </head><body><table>${str}</table></body></html>`;
    // 转base64
    var url = href = uri + window.btoa(unescape(encodeURIComponent(template)));
    // 下载模板
    downloadExcel(url, '模板.xls');
}
 function downloadExcel(url, name) {
    // 利用a标签的download属性进行下载
    var link = document.createElement("a");

    // 设置a标签的属性
    link.href = url;
    link.download = name || 'work.xls';
    // 加入dom树中，模拟用户点击并下载
    document.body.appendChild(link);
    link.click();
    // 移除该元素，防泄漏
    document.body.removeChild(link);
}