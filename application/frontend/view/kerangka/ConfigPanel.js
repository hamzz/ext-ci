Ext.define('HamzProject.view.kerangka.ConfigPanel' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.config-panel',
	id: 'configPanel',
        
    iconCls: 'fam cog',
	title : 'Konfigurasi',
	items:[{
            xtype: 'config-menu',
	    //region: 'center'
        }],
	initComponent: function() {
		
		this.callParent(arguments);
	}
});
