Ext.define('HamzProject.view.kerangka.Surface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.kerangka-surface',
    
    initComponent: function() {
        Ext.apply(this, {
            id: 'kerangka-surface',
            layout: 'border',
            border: false,
            bodyPadding: 0,
            
            items: [{
		xtype:'menu-container',
		region:'west',
		width: 200,
		collapsible: true,
		split: true
		
	    },{
		//xtype: 'splitter' 
	    },{
		xtype: 'content-panel',
		region: 'center'
		
	    }]
        });

        this.callParent(arguments);
    }
});