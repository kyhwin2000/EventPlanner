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

// create Data & Table View
var data = [
		{title:'회식', hasChild:true, color:'red', selectedColor:'#fff'},
		{title:'SVP 모임', hasChild:true, color:'red', selectedColor:'#fff'},
];

var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
		// 제대로 접속되면 로그에 출력하고 이미지 파일을 불러오기 
		Ti.API.info('onload called, HTTP status = '+this.status);
		var img = Ti.UI.createImageView({
			image:this.responseData
		});
		win2.add(img);
    },
    onerror: function(e) {
		Ti.API.info('error, HTTP status = '+this.status);
		alert(e.error);
    },
    timeout:5000  /* in milliseconds */
});
xhr.open("GET", 'http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png');
xhr.send();  // request is actually sent with this statement

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

