Ext.define('HamzProject.view.kerangka.ConfigMenu' ,{
    extend: 'Ext.menu.Menu',
    alias : 'widget.config-menu',
	id: 'configMenu',
        layout: {
	    type: 'vbox',       // Arrange child items vertically
	    align: 'stretch',
	},
        plain:true,
        floating: false,
	items:[{
            text: 'Profil User',
            id:'profil_user',
            iconCls:'fam user',
            handler: 'profil_user'
        },{
            text: 'Manajemen User',
            id:'manaj_user',
            iconCls:'fam vcard_edit',
            handler: 'manaj_user'
        },{
            text: 'Manajemen Menu',
            id:'manaj_menu',
            iconCls:'fam application_key',
            handler: 'manaj_menu'
        },{
            //xtype:'button',
            id:'logout_app',
            text: 'Logout',
            iconCls:'fam door',
            handler: 'logout'
        }],
	initComponent: function() {
        	this.callParent(arguments);
	}
});
