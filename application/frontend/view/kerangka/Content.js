Ext.define('HamzProject.view.kerangka.Content' ,{
    extend: 'Ext.tab.Panel',
    alias : 'widget.content-panel',
	id: 'ContentPanel',
        plugins: Ext.create('Ext.ux.TabCloseMenu', {
            extraItemsTail: [
                '-',
                {
                    text: 'Closable',
                    checked: true,
                    hideOnClick: true,
                    handler: function (item) {
                        currentItem.tab.setClosable(item.checked);
                    }
                },
                '-',
                {
                    text: 'Enabled',
                    checked: true,
                    hideOnClick: true,
                    handler: function(item) {
                        currentItem.tab.setDisabled(!item.checked);
                    }
                }
            ]}),
    //iconCls: 'fam door_open',
	//title : 'Menu',
	//store: 'Movies',
	items:[{
            title: 'Bar',
            tabConfig: {
                title: 'Portal',
                tooltip: 'Portal'
            },
	    iconCls:'fam house',
	    layout:'border',
            items:[{
		//xtype: 'movie-grid',
		//region: 'center'
		xtype: 'box',
                region: 'center',
                html	:'Perpustakaan',
		    padding:10,
		style: {
		    fontSize:'150%',
		    //fontStyle:'italic',
		    fontWeight:'bold'
		}
            }]
        },{
            title: 'Bar',
            tabConfig: {
                title: 'Custom Title',
                tooltip: 'A button tooltip'
            },
	    closable:true
        }],
	initComponent: function() {		
		this.callParent(arguments);
	}
        
});
