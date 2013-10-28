Ext.define('HamzProject.view.kerangka.MenuPanel' ,{
    extend: 'Ext.tree.Panel',
    alias : 'widget.menu-panel',
	id: 'menuPanel',
    useArrows: true,
    rootVisible: false,    
    iconCls: 'fam door_open',
	title : 'Menu',
	root: {
	    Id: '',
	    Title: 'Root',
	    HasChildren: true
	},
	store: 'MenuTree',
	initComponent: function() {
	    this.callParent(arguments);
	}
});
