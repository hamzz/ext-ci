Ext.define('HamzProject.view.Surface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Surface',
	
    initComponent: function() {
        Ext.apply(this, {
            id: 'surface',
            layout: 'border',
            border: false,
            bodyPadding: 3,
           
            items: [{
                id: 'title',
                xtype: 'box',
                region: 'north',
                height: 30,
                html	:'Perpustakaan',
		style: {
		    fontSize:'150%',
		    fontStyle:'italic',
		    fontWeight:'bold',
		}
            },{
				xtype: 'kerangka-surface',
				region: 'center'
			}],
			
			dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: ['->', {
                    text:'Author H@mz'
                }]
			}]
        });

        this.callParent(arguments);
    }
});