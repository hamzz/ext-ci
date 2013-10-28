Ext.define('HamzProject.view.kerangka.MenuContainer' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.menu-container',
	id: 'menuContainer',
        
    iconCls: 'fam door_open',
	title : 'Menu',
	//store: 'Movies',
	layout: {
	    type: 'vbox',       // Arrange child items vertically
	    align: 'stretch',
	},
	items:[{
		xtype:'menu-panel',
		//region:'north',
		flex:1,
		header:false
		//height:450
	    },{
                xtype:'config-panel',
		autoHeght:true,
                collapsible:true,
                collapseDirection:'bottom',
            }],
	initComponent: function() {
		this.callParent(arguments);
	}
});
