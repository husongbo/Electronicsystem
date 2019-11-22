	 var myChart;
	function echartStr(){
		// 基于准备好的dom，初始化echarts实例
		if (myChart != null && myChart != "" && myChart != undefined) {  
	        myChart.dispose();  
	    } 
	    myChart = echarts.init(document.getElementById('main'));
	    // 指定图表的配置项和数据
	    var option = {
		    tooltip : {
		        trigger: 'item',
		        formatter: "余额占比:{d}%"
		    },
		    series : [
		        {
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '50%'],
		            data:[
						{
							"name": "余额占比",
							"value": 450
						}, {
							"name": "",
							"value": 340
						}
					],
		            label: {
	                normal: {
	                    show: false,
	                }
	            },
		        }
		    ]
		};
	
	    // 使用刚指定的配置项和数据显示图表。
	    myChart.setOption(option);
	};
	
	// //缺陷分类
	// function qxfl(that){
	// 	var brower = [],
	// 		names = [];;
	// 	$.ajax({
	//         type: 'get',
	//         url: 'jsbin/echartOne.json',//请求数据的地址
	//         dataType: "json",        //返回数据形式为json
	//         success: function (result) {
	// 			console.log(result)
	// 			result.list2.forEach((item)=>{
	// 				brower.push({
	// 				    value: item.value
	// 				});
	// 			})
	//             echartStr(brower);
	//         },
	//         error: function (errorMsg) {
	//             //请求失败时执行该函数
	//             alert("图表请求数据失败!");
	//         }
	//     });
	// }
	

