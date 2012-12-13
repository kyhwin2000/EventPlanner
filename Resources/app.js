// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'약속',
    backgroundColor:'#fff'
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

// 서버에 있는 json파일에서 내용을 끌어와서 테이블 뷰에 뿌려주기  
// var url = "https://raw.github.com/appcelerator/Documentation-Examples/master/HTTPClient/data/json.txt";
var url = "http://ec2-176-32-71-230.ap-northeast-1.compute.amazonaws.com/json.txt";
var table = Ti.UI.createTableView();
var tableData = [];
var json, fighters, fighter, i, row, nameLabel, nickLabel;

var xhr = Ti.Network.createHTTPClient({
	onload: function() {
		// Ti.API.debug(this.responseText);

		json = JSON.parse(this.responseText);
		for (i = 0; i < json.fighters.length; i++) {
			fighter = json.fighters[i];
			row = Ti.UI.createTableViewRow({
				height:'60dp'
			});
			nameLabel = Ti.UI.createLabel({
				text:fighter.name,
				font:{
					fontSize:'24dp',
					fontWeight:'bold'
				},
				height:'auto',
				left:'10dp',
				top:'5dp',
				color:'#000',
				touchEnabled:false
			});
			nickLabel = Ti.UI.createLabel({
				text:'"' + fighter.nickname + '"',
				font:{
					fontSize:'16dp'
				},
				height:'auto',
				left:'15dp',
				bottom:'5dp',
				color:'#000',
				touchEnabled:false
			});
			row.add(nameLabel);
			row.add(nickLabel);
			tableData.push(row);
		}

		table.setData(tableData);
	},
	onerror: function(e) {
		Ti.API.debug("STATUS: " + this.status);
		Ti.API.debug("TEXT:   " + this.responseText);
		Ti.API.debug("ERROR:  " + e.error);
		alert('There was an error retrieving the remote data. Try again.');
	},
	timeout:5000
});

xhr.open("GET", url);
xhr.send();

table.addEventListener('click',function(e){
	tab1.open(win2);
});

win1.add(table);

/*
// 테이블 뷰에 들어갈 데이터(서버에서 끌어 옴)  
var data = [
		{title:"정호 생일", hasChild:true, color:'red', selectedColor:'#fff'},
		{title:"쥐세븐 회동", hasChild:true, color:'red', selectedColor:'#fff'},
];

// create table view
for (var i = 0; i < data.length; i++ ) { 
	data[i].color = '#000'; 
	data[i].font = {fontWeight:'bold'} 
};
var tableview = Titanium.UI.createTableView({
	data:data
});

tableview.addEventListener('click',function(e){
	tab1.open(win2);
});
win1.add(tableview);
*/

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});

var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});


var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'테이블 뷰의 무덤',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
win2.add(label2);

//이동할 윈도우 만들기 
var win3 = Ti.UI.createWindow({
	url : 'win3.js',
	title: '약속잡기',
	backgroundColor:'#fff'
});

// 내비게이션 바에 추가 버튼 만들기
var addEvent = Titanium.UI.createButton({ title:'추가' });
win1.rightNavButton = addEvent;
addEvent.addEventListener('click', function()
{
	tab1.open(win3);
});

//완료 버튼 누르면 이동할 윈도우 만들기 
var win4 = Ti.UI.createWindow({
	url : 'win4.js',
	title: '약속 확인',
	backgroundColor:'#fff'
});

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();

