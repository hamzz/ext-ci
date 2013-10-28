Ext.define('HamzProject.controller.Kerangka', {
    extend:	'Ext.app.Controller',
    stores:	['MenuTree'],
    models:	['MenuTree'],
    views: 	['kerangka.Surface',
		 'kerangka.MenuContainer',
		 'kerangka.ConfigPanel',
		 'kerangka.MenuPanel',
		 'kerangka.Content',
		 'kerangka.ConfigMenu',
		 'kerangka.ProfilUser',
		 'kerangka.ManajMenu'],
    refs: [{
		ref: 'ContentPanel',
		selector: 'content-panel'
	},{
	        ref: 'ProfilUser',
		selector: 'profiluser-form'
	},{
	        ref: 'ManajMenu',
		selector: 'manaj-menu'
	},{
		ref: 'ManajUser',
		selector: 'manaj-user'
	}],
	
    init: function() {
        this.control({
	    'config-menu > menuitem[id=logout_app]': {
                click: this.logout
            },
	    'config-menu > menuitem[id=profil_user]': {
                click: this.profil_user
            },
	    'config-menu > menuitem[id=manaj_menu]': {
                click: this.manaj_menu
            },
	    'config-menu > menuitem[id=manaj_user]': {
                click: this.manaj_user
            },
	    'manaj-menu button[action=add]': {
                click: this.addEditMenu
            }
        });
    },
    
    logout: function() {
        document.location.href = '/ciext_new/auth/logout';
    },

    addEditMenu: function(grid, record) {
		var window = Ext.create('HamzProject.view.movie.Window'),
			form = window.down('form');
		
		if(record) {
			//form.loadRecord(record);
        }
		
		window.show();
    },
    
    profil_user: function(menuitem, e, opt) {
	var tabPanel = this.getContentPanel();
	tabId=menuitem.text;
        var items = tabPanel.items.items;

        var exist = false;
        for(var i = 0; i < items.length; i++){
            if(items[i].id === tabId){
                tabPanel.setActiveTab(i);
                exist = true;
            }
        }
        if(!exist){
            tabPanel.add({
                xtype: 'panel',
                title: tabId,
		iconCls: 'fam user',
                id: tabId,
		layout:'border',
                closable: true,
	    items:[{xtype:'movie-form',
		   region:'center'}]
            }).show();
        }
    },
    manaj_user: function(menuitem, e, opt) {
	var tabPanel = this.getContentPanel();
	tabId=menuitem.text;
        var items = tabPanel.items.items;

        var exist = false;
        for(var i = 0; i < items.length; i++){
            if(items[i].id === tabId){
                tabPanel.setActiveTab(i);
                exist = true;
            }
        }
        if(!exist){
            tabPanel.add({
                xtype: 'panel',
                title: tabId,
		iconCls: 'fam user',
                id: tabId,
		layout:'border',
                closable: true,
	    items:[{xtype:'movie-grid',
		   region:'center',
		   //store:'Movies',
		   //models:'Movie'
		   }]
            }).show();
        }
    },
    manaj_menu: function(menuitem, e, opt) {
	var tabPanel = this.getContentPanel();
	tabId=menuitem.text;
        var items = tabPanel.items.items;

        var exist = false;
        for(var i = 0; i < items.length; i++){
            if(items[i].id === tabId){
                tabPanel.setActiveTab(i);
                exist = true;
            }
        }
        if(!exist){
            tabPanel.add({
                xtype: 'panel',
                title: tabId,
		iconCls: 'fam application_key',
                id: tabId,
		layout:'border',
                closable: true,
	    items:[{xtype:'manaj-menu',
		   region:'center'}]
            }).show();
        }
    }
    
});
