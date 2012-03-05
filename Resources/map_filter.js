Ti.include('FilterSettings.js');

var winMapFilter = {
	
};

(function() {
	var checkBox, tbNameSearch, tbIndustry, pkrIndustry, tbSource, pkrSource, tbViolation, pkrViolation, tbDOLSource, pkrDOLSource, tbDOLArea, win, winWidth;
	
	function sourceOSHA(name,ll) {
		var where = '';
		
		switch (FilterSettings.Inspections) {
		case FilterSettings.INSPECTIONS_VIOLATIONS:
			where = 'osha_violation_indicator = 1';
			break;
		case FilterSettings.INSPECTIONS_NOVIOLATIONS:
			where = 'osha_violation_indicator = 0';
			break;
		case FilterSettings.INSPECTIONS_ALL:
			where = '';
			break;	
		}
		
		if (name) {
			name = name.replace(/'/g,"\\\\'");
			name = "estab_name CONTAINS IGNORING CASE \'" + name + "\'";
			if (where != '') {
				where = where + ' AND ' + name;	
			}
			else {
				where = name;
			}
			
		} 
		
		switch (FilterSettings.Industry) {
		case FilterSettings.INDUSTRY_FOOD:
			winDOLMap.googleMap.evalJS('setLayerOSHAFood(\"' + where + '\");');
			if (name) {
				winDOLMap.wvDolList.evalJS('setLayerOSHAFood(\"' + where + '\",\"' + '' + '\");');
			} else {
				winDOLMap.wvDolList.evalJS('setLayerOSHAFood(\"' + where + '\",\"' + ll + '\");');
			}
			break;	
		case FilterSettings.INDUSTRY_RETAIL:
			winDOLMap.googleMap.evalJS('setLayerOSHARetail(\"' + where + '\");');
			if (name) {
				winDOLMap.wvDolList.evalJS('setLayerOSHARetail(\"' + where + '\",\"' + '' + '\");');
			} else {
				winDOLMap.wvDolList.evalJS('setLayerOSHARetail(\"' + where + '\",\"' + ll + '\");');
			}
			break;
		case FilterSettings.INDUSTRY_HOSPITALITY:
			winDOLMap.googleMap.evalJS('setLayerOSHAHospitality(\"' + where + '\");');
			if (name) {
				winDOLMap.wvDolList.evalJS('setLayerOSHAHospitality(\"' + where + '\",\"' + '' + '\");');
			} else {
				winDOLMap.wvDolList.evalJS('setLayerOSHAHospitality(\"' + where + '\",\"' + ll + '\");');
			}
			break;
		case FilterSettings.INDUSTRY_ALL:
			/*
			winDOLMap.googleMap.evalJS('setLayerOSHAFood(\"' + where + '\");');
			winDOLMap.googleMap.evalJS('setLayerOSHARetail(\"' + where + '\");');
			winDOLMap.googleMap.evalJS('setLayerOSHAHospitality(\"' + where + '\");');
			*/
			winDOLMap.googleMap.evalJS('setLayerOSHAFull(\"' + where + '\");');
			
			if (name) {
				winDOLMap.wvDolList.evalJS('setLayerOSHAFood(\"' + where + '\",\"' + '' + '\");');
				winDOLMap.wvDolList.evalJS('setLayerOSHARetail(\"' + where + '\",\"' + '' + '\");');
				winDOLMap.wvDolList.evalJS('setLayerOSHAHospitality(\"' + where + '\",\"' + '' + '\");');
			} else {
				winDOLMap.wvDolList.evalJS('setLayerOSHAFood(\"' + where + '\",\"' + ll + '\");');
				winDOLMap.wvDolList.evalJS('setLayerOSHARetail(\"' + where + '\",\"' + ll + '\");');
				winDOLMap.wvDolList.evalJS('setLayerOSHAHospitality(\"' + where + '\",\"' + ll + '\");');
			}
			break;
		}
	}
	
	function sourceWHD(name,ll) {
		var where = '';
		
		switch (FilterSettings.Inspections) {
		case FilterSettings.INSPECTIONS_VIOLATIONS:
			where = 'whd_violation_indicator = 1';
			break;
		case FilterSettings.INSPECTIONS_NOVIOLATIONS:
			where = 'whd_violation_indicator = 0';
			break;
		case FilterSettings.INSPECTIONS_ALL:
			where = '';
			break;	
		}
		
		if (name) {
			name = name.replace(/'/g,"\\\\'");
			name = "trade_nm CONTAINS IGNORING CASE \'" + name + "\'";
			if (where != '') {
				where = where + ' AND ' + name;	
			}
			else {
				where = name;
			}
			
		} 
		
		switch (FilterSettings.Industry) {
		case FilterSettings.INDUSTRY_FOOD:
			winDOLMap.googleMap.evalJS('setLayerWHDFood(\"' + where + '\");');
			if (name) {
				winDOLMap.wvDolList.evalJS('setLayerWHDFood(\"' + where + '\",\"' + '' + '\");');
			} else {
				winDOLMap.wvDolList.evalJS('setLayerWHDFood(\"' + where + '\",\"' + ll + '\");');
			}
			break;	
		case FilterSettings.INDUSTRY_RETAIL:
			winDOLMap.googleMap.evalJS('setLayerWHDRetail(\"' + where + '\");');
			if (name) {
				winDOLMap.wvDolList.evalJS('setLayerWHDRetail(\"' + where + '\",\"' + '' + '\");');
			} else {
				winDOLMap.wvDolList.evalJS('setLayerWHDRetail(\"' + where + '\",\"' + ll + '\");');
			}
			break;
		case FilterSettings.INDUSTRY_HOSPITALITY:
			winDOLMap.googleMap.evalJS('setLayerWHDHospitality(\"' + where + '\");');
			if (name) {
				winDOLMap.wvDolList.evalJS('setLayerWHDHospitality(\"' + where + '\",\"' + '' + '\");');
			} else {
				winDOLMap.wvDolList.evalJS('setLayerWHDHospitality(\"' + where + '\",\"' + ll + '\");');
			}
			break;
		case FilterSettings.INDUSTRY_ALL:
			/*
			winDOLMap.googleMap.evalJS('setLayerWHDFood(\"' + where + '\");');
			winDOLMap.googleMap.evalJS('setLayerWHDRetail(\"' + where + '\");');
			winDOLMap.googleMap.evalJS('setLayerWHDHospitality(\"' + where + '\");');
			*/
			winDOLMap.googleMap.evalJS('setLayerWHDFull(\"' + where + '\");');
			if (name) {
				winDOLMap.wvDolList.evalJS('setLayerWHDFood(\"' + where + '\",\"' + '' + '\");');
				winDOLMap.wvDolList.evalJS('setLayerWHDRetail(\"' + where + '\",\"' + '' + '\");');
				winDOLMap.wvDolList.evalJS('setLayerWHDHospitality(\"' + where + '\",\"' + '' + '\");');
			} else {
				winDOLMap.wvDolList.evalJS('setLayerWHDFood(\"' + where + '\",\"' + ll + '\");');
				winDOLMap.wvDolList.evalJS('setLayerWHDRetail(\"' + where + '\",\"' + ll + '\");');
				winDOLMap.wvDolList.evalJS('setLayerWHDHospitality(\"' + where + '\",\"' + ll + '\");');
			}
			break;
		}
	}
	
	function sourceDOL(name,ll) {
		switch (FilterSettings.DolSource) {
		case FilterSettings.DOLSOURCE_OSHA:
			sourceOSHA(name,ll);
			break;
		case FilterSettings.DOLSOURCE_WHD:
			sourceWHD(name,ll);
			break;
		case FilterSettings.DOLSOURCE_ALL:
			sourceWHD(name,ll);
			sourceOSHA(name,ll);
			break;
		}
	}
	
	winMapFilter.update = function(name) {

		var ll = winDOLMap.googleMap.evalJS('getMapCenterLat();')	+ ',' + winDOLMap.googleMap.evalJS('getMapCenterLng();');
		
		switch (FilterSettings.Source) {
		case FilterSettings.SOURCE_DOL:
			Ti.App.fireEvent('clearYelpMarkers', null);
			winDOLMap.googleMap.evalJS('clearLayers();');
			winDOLMap.tvDolList.data = [];
			
			sourceDOL(name,ll);
			
			break;
		case FilterSettings.SOURCE_YELP:
			Ti.App.fireEvent('clearYelpMarkers', null);
			winDOLMap.googleMap.evalJS('clearLayers();');
			winDOLMap.tvDolList.data = [];
			
			Ti.App.fireEvent('getLocalYelp', {ll: ll});
			break;
		case FilterSettings.SOURCE_ALL:		
			Ti.App.fireEvent('clearYelpMarkers', null);
			winDOLMap.googleMap.evalJS('clearLayers();');
			winDOLMap.tvDolList.data = [];
			
			sourceDOL(name,ll);
			Ti.App.fireEvent('getLocalYelp', {ll: ll});
			break;
		}

    }
	
    function createIconRow(buttonWidth, iconImages) {
    	
        var rowSourceIcon = Ti.UI.createTableViewRow({
			hasChild:false,
			height:'auto',
			className: 'iconrow',
			selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
			backgroundSelectedColor: 'white'
		});
		
		var viewSource = Titanium.UI.createView({
			top: 0,
			height: 'auto',
			left: 10,
			//width: Titanium.Platform.displayCaps.platformWidth-20
			width: winWidth-20,
			layout: Ti.Platform.osname == 'android' ? 'horizontal' : 'absolute'
		});	
		rowSourceIcon.add(viewSource);
		
		if (Ti.Platform.osname == 'android') {
			
			for (i in iconImages) {
				var imgSource = Ti.UI.createImageView({
					top: iconImages[i].top,
					image: iconImages[i].icon,
					width: iconImages[i].width,
					left: 10,
					height: iconImages[i].height
				});
				viewSource.add(imgSource);
				
				var lbl = Ti.UI.createLabel({
					left: 10,
					text:iconImages[i].text, 
					color: 'black',
					textAlign: 'center',
					font:{fontSize:'16dp'}
				});
				viewSource.add(lbl);
			}
		} else {
			for (i in iconImages) {
				var imgSource = Ti.UI.createImageView({
					top: iconImages[i].top,
					image: iconImages[i].icon,
					width: buttonWidth,
					left: buttonWidth*i,
					height: iconImages[i].height
				});
				viewSource.add(imgSource);
			}
		}
		
		
        return rowSourceIcon;
    }
    
    function createHeaderRow(text) {
    	
    	var rowHeader = Ti.UI.createTableViewRow({
			hasChild:false,
			height: Ti.Platform.osname == 'android' ? 30 : 'auto',
			className: 'name',
			selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
			backgroundSelectedColor: 'white'
		});
		
		var lblHeader = Ti.UI.createLabel({
			text: text,
			color: 'black',
			top: Ti.Platform.osname == 'android' ? 0 : 10,
			bottom: 0,
			height: Ti.Platform.osname == 'android' ? 30 : 'auto',
			left: 10,
			//width: winWidth - 20,
			textAlign: 'left',
		    font:{fontSize: '16dp', fontWeight:'bold'}
		});
		rowHeader.add(lblHeader);
		
		return rowHeader;
    }
    
	winMapFilter.create = function() {
		var bb = null;
		
		if (Ti.Platform.osname != 'android') {
			bb = Titanium.UI.createButtonBar({
				labels:['Apply', 'Cancel'],
				backgroundColor:headerColor
			});
			bb.addEventListener('click', function(evt) {
				if (evt.index == 0) {
					FilterSettings.Inspections = tbViolation.index;
					FilterSettings.DolSource = tbDOLSource.index;
					FilterSettings.Industry = tbIndustry.index;
					FilterSettings.Source = tbSource.index;
					
					if (tbNameSearch.index == 1) {
						FilterSettings.SearchName = textSearch.value;
					}
					else {
						FilterSettings.SearchName = null;
					}
				
					winMapFilter.update(FilterSettings.SearchName);	
					win.close();
				} else {
					win.close();
				}
				
			});
		}
		
		win = Ti.UI.createWindow({
			orientationModes: orientationModes,
			backgroundColor:'white',
			navBarHidden: Ti.Platform.osname == 'android' ? true : false,
			barColor: headerColor,
			//title: 'Filter',
			leftNavButton: Ti.UI.createLabel({color:'white',font:{fontSize:'18dp', fontWeight:'bold'},text: ' Filter'}),
			rightNavButton: bb,
			modal: true
		});
		win.addEventListener('android:back', function() {
			
			if (checkBox.value == false) {
				FilterSettings.SearchName = textSearch.value;
			} else {
				FilterSettings.SearchName = null;
			}
			
			winMapFilter.update(FilterSettings.SearchName);	
			win.close();
		
			
		});
		
		if (Ti.Platform.osname == 'ipad') {
			winWidth = 540;
		} else {
			winWidth = Titanium.Platform.displayCaps.platformWidth;
			//winWidth = win.width;
		}
		
		if (Ti.Platform.osname == 'android') {
			var vwTop = Ti.UI.createView({
				top: 0,
				left: 0,
				right: 0,
				height: 44,
				backgroundImage: 'images/toolbar_background.png',
			});
			
			var lblHeader = Ti.UI.createLabel({
				text: 'Filter',
				color: 'white',
				height: 44,
				left: 10,
				textAlign: 'left',
			    font:{fontSize:'18dp', fontWeight:'bold'}
			});
			vwTop.add(lblHeader);
			
			win.add(vwTop);	
		}
		
		var buttonWidthForTwo = Math.round((winWidth-20)/2);
		var buttonWidthForThree = Math.round((winWidth-20)/3);
		var buttonWidthForFour = Math.round((winWidth-20)/4);	
		
		var tableView = Titanium.UI.createTableView({
			backgroundColor:'white',
			separatorColor:'white',
			top: Ti.Platform.osname == 'android' ? 44 : 0,
			width: winWidth
		});
		win.add(tableView);
		
		tableView.appendRow(createHeaderRow('Business Name:'));
		
		var rowNameSearch = Titanium.UI.createTableViewRow({
			hasChild: false,
			height: 'auto',	
			selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
			backgroundSelectedColor: 'white'
		});
		
		if (Ti.Platform.osname == 'android') {
			checkBox = Titanium.UI.createSwitch({
				style: Titanium.UI.Android.SWITCH_STYLE_CHECKBOX,
				title: '  All, or \n  Search:',
				color: 'black',
				value: true,
				top: 0,
				left: 15,
				width: 100,
				font:{fontSize:'16dp'}
			});
			checkBox.addEventListener('change', function(e) {
				textSearch.blur();
				if (checkBox.value == true) {
					textSearch.enabled = false;
				} else {
					textSearch.enabled = true;
					
					//textSearch.focus();
				}
			});
			
			rowNameSearch.add(checkBox);
		} else {
			tbNameSearch = Titanium.UI.createTabbedBar({
				left: 10,
				top:0,
				width: 100,
				height: 30,
				labels:[{title: 'All', width: 50},{title:'Search:',width:60}],
				backgroundColor: headerColor,
				index: ((FilterSettings.SearchName == null) ? 0 : 1),
				style:Titanium.UI.iPhone.SystemButtonStyle.BAR
			});
			tbNameSearch.addEventListener('click', function(evt){
				if (evt.index == 0) {
					textSearch.visible = false;
				} else {
					textSearch.visible = true;
					textSearch.focus();
				}
			});
			rowNameSearch.add(tbNameSearch);
		}
		
		var btnCancel = Titanium.UI.createButton({
			title: 'Cancel',
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		btnCancel.addEventListener('click', function(evt) {
			textSearch.blur();
		});
		
		var flexSpace = Titanium.UI.createButton({
			systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		});
		
		var btnSearch = Ti.UI.createButton({
		    //systemButton:Titanium.UI.iPhone.SystemButton.SEARCH
		    backgroundDisabledImage: 'images/magnifying_glass.png',
		    backgroundImage: 'images/magnifying_glass.png',
		    width: 14,
		    height: 15,
		    enabled: false
		});
		
		var textSearch = Titanium.UI.createTextField({
			clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ALWAYS,
			leftButton: btnSearch,
			leftButtonMode: Titanium.UI.INPUT_BUTTONMODE_ALWAYS,
			height: Ti.Platform.osname == 'android' ? 40 : 32,
			width: 180,
			left: 130,
			enabled: Ti.Platform.osname == 'android' ? false : true,
			font:{fontSize: '14dp'},
			hintText: 'enter name',
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			visible: ((FilterSettings.SearchName == null && Ti.Platform.osname != 'android') ? false : true),
			returnKeyType: Titanium.UI.RETURNKEY_DONE,
			value: FilterSettings.SearchName
		});
		if (Ti.Platform.osname == 'iphone') {
			textSearch.keyboardToolbar = [flexSpace,btnCancel];
			textSearch.keyboardToolbarColor = 'gray';	
			textSearch.keyboardToolbarHeight = 40; 
		} 
		textSearch.addEventListener('return', function(evt) {
			textSearch.blur();
		});
		rowNameSearch.add(textSearch);
		
		tableView.appendRow(rowNameSearch);
		
		tableView.appendRow(createHeaderRow('Industry:'));
		
		var industryList = [
		{icon:'images/yellow_bubble_blank.png',text:'Food',width: 21,height:34,top:0},
		{icon:'images/blue_bubble_blank.png',text:'Retail',width: 21,height:34,top:0},
		{icon:'images/purple_bubble_blank.png',text:'Hospitality',width: 21,height:34,top:0}];
		
		tableView.appendRow(createIconRow(buttonWidthForFour,industryList));
		
		var rowIndustryName = Ti.UI.createTableViewRow({
			hasChild:false,
			height:'auto',
			//className: 'selection',
			selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
			backgroundSelectedColor: 'white'
		});
		
		if (Ti.Platform.osname == 'android') {
			rowIndustryName.height = 40;
			var pickerList = [{title: 'Food', index: '0'}, {title: 'Retail', index: '1'}, {title: 'Hospitality', index: '2'}, {title: 'All', index: '3'}];
			pkrIndustry = Ti.UI.createPicker({
				top: 0,
				height: 40,
				selectionIndicator: true,
			});
			pkrIndustry.addEventListener('change', function(evt) {
				FilterSettings.Industry = evt.rowIndex;
			});
			
			var data = [];
			
			for (i in pickerList) {
				data[i] = Ti.UI.createPickerRow({title: pickerList[i].title});
			}

			pkrIndustry.add(data);
			pkrIndustry.setSelectedRow(0,FilterSettings.Industry);
			rowIndustryName.add(pkrIndustry);
			
			
		} else {
			
			tbIndustry = Titanium.UI.createTabbedBar({
				top: 0,
				labels:[{title:'Food', width: buttonWidthForFour},
				 {title:'Retail',width: buttonWidthForFour},
				 {title:'Hospitality',width: buttonWidthForFour},
				 {title:'All',width: buttonWidthForFour}
				 ],
				backgroundColor: headerColor,
				index:FilterSettings.Industry,
				style: Titanium.UI.iPhone.SystemButtonStyle.BAR
			});
			rowIndustryName.add(tbIndustry);
		}
		tableView.appendRow(rowIndustryName);
		
		tableView.appendRow(createHeaderRow('Source:'));
		
		var sourceList = [
		{icon:'images/yellow_bubble_blank.png',text:'Dept of Labor',width: 21,height:34,top:0},
		{icon:'images/yellow_bubble_yelp.png',text:'Yelp (local)',width: 17,height:26,top:8}];
		tableView.appendRow(createIconRow(buttonWidthForThree,sourceList) );
		
		var rowSourceName = Ti.UI.createTableViewRow({
			hasChild:false,
			height:'auto',
			//className: 'selection',
			selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
			backgroundSelectedColor: 'white'
		});
		
		
		if (Ti.Platform.osname == 'android') {
			rowIndustryName.height = 40;
			var pickerList = [{title: 'Dept of Labor', index: '0'}, {title: 'Yelp (local)', index: '1'}, {title: 'Both', index: '2'}];
			pkrSource = Ti.UI.createPicker({
				top: 0,
				height: 40,
				selectionIndicator: true,
			});
			pkrSource.addEventListener('change', function(evt) {
				FilterSettings.Source = evt.rowIndex;
			});
			
			var data = [];
			
			for (i in pickerList) {
				data[i] = Ti.UI.createPickerRow({title: pickerList[i].title});
			}

			pkrSource.add(data);
			pkrSource.setSelectedRow(0,FilterSettings.Source);
			rowSourceName.add(pkrSource);
			
		} else {
			
			tbSource = Titanium.UI.createTabbedBar({
				top: 0,
				labels:[{title:'Dept of Labor', width: buttonWidthForThree},
				{title:'Yelp (local)',width: buttonWidthForThree},
				{title:'Both',width: buttonWidthForThree}
				],
				backgroundColor: headerColor,
				index:FilterSettings.Source,
				style: Titanium.UI.iPhone.SystemButtonStyle.BAR
			});
			rowSourceName.add(tbSource);
		}
		tableView.appendRow(rowSourceName);
		
		tableView.appendRow(createHeaderRow('Dept of Labor Results:'));
		
		var inspectionList = [
		{icon:'images/yellow_bubble_diamond.png',text:'Violations',width: 21,height:34,top:0},
		{icon:'images/yellow_bubble_blank.png',text:'No Violations',width: 21,height:34,top:0}];
		tableView.appendRow(createIconRow(buttonWidthForThree,inspectionList) );
		
		var rowDOLViolations = Ti.UI.createTableViewRow({
			hasChild:false,
			height:'auto',
			//className: 'selection',
			selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
			backgroundSelectedColor: 'white'
		});
		
		if (Ti.Platform.osname == 'android') {
			rowIndustryName.height = 40;
			var pickerList = [{title: 'Violations', index: '0'}, {title: 'No Violations', index: '1'}, {title: 'Both', index: '2'}];
			pkrViolation = Ti.UI.createPicker({
				top: 0,
				height: 40,
				selectionIndicator: true,
			});
			pkrViolation.addEventListener('change', function(evt) {
				FilterSettings.Inspections = evt.rowIndex;
			});
			
			var data = [];
			
			for (i in pickerList) {
				data[i] = Ti.UI.createPickerRow({title: pickerList[i].title});
			}

			pkrViolation.add(data);
			pkrViolation.setSelectedRow(0,FilterSettings.Inspections);
			rowDOLViolations.add(pkrViolation);
			
		} else {
			
			tbViolation = Titanium.UI.createTabbedBar({
				top: 0,
				labels:[{title:'Violations', width: buttonWidthForThree},
				 {title:'No Violations',width: buttonWidthForThree},
				 {title:'Both',width: buttonWidthForThree}
				 ],
				backgroundColor: headerColor,
				index:FilterSettings.Inspections,
				style: Titanium.UI.iPhone.SystemButtonStyle.BAR
			});
			rowDOLViolations.add(tbViolation);
		}
		tableView.appendRow(rowDOLViolations);
		
		tableView.appendRow(createHeaderRow('Dept of Labor Agencies:') );
		
		var rowDOLSource = Ti.UI.createTableViewRow({
			hasChild:false,
			height:'auto',
			//className: 'selection',
			selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
			backgroundSelectedColor: 'white'
		});
		
		if (Ti.Platform.osname == 'android') {
			rowIndustryName.height = 40;
			var pickerList = [{title: 'OSHA', index: '0'}, {title: 'WHD', index: '1'}, {title: 'Both', index: '2'}];
			pkrDOLSource = Ti.UI.createPicker({
				top: 0,
				height: 40,
				selectionIndicator: true,
			});
			pkrViolation.addEventListener('change', function(evt) {
				FilterSettings.DolSource = evt.rowIndex;
			});
			
			var data = [];
			
			for (i in pickerList) {
				data[i] = Ti.UI.createPickerRow({title: pickerList[i].title});
			}

			pkrDOLSource.add(data);
			pkrDOLSource.setSelectedRow(0,FilterSettings.DolSource);
			rowDOLSource.add(pkrDOLSource);
		} else {
			
			tbDOLSource = Titanium.UI.createTabbedBar({
				top: 0,
				labels:[{title:'OSHA', width: buttonWidthForThree},
				 {title:'WHD',width: buttonWidthForThree},
				 {title:'Both',width: buttonWidthForThree}
				 ],
				backgroundColor: headerColor,
				index:FilterSettings.DolSource,
				style: Titanium.UI.iPhone.SystemButtonStyle.BAR
			});
			rowDOLSource.add(tbDOLSource);
		}
		tableView.appendRow(rowDOLSource);
		
		return win;
	}
	
})();