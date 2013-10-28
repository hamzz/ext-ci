//\Scripts\app\model\MenuItem.js
Ext.define('Cms.model.MenuItem', {
    extend: 'Ext.data.Model',
    idProperty: 'Id',
    fields: [
        { name: 'Id', type: 'int', useNull: true },
        { name: 'ParentItemId', type: 'string' },
        { name: 'Title', type: 'string' },
        { name: 'Url', type: 'string' },
        { name: 'CssClass', type: 'string' },
        { name: 'leaf', type: 'bool', convert: function (v, r) { return !r.raw.HasChildren; } }
    ]
});
 
//\Scripts\app\store\MenuItemsTree.js
Ext.define('Cms.store.MenuItemsTree', {
    extend: 'Ext.data.TreeStore',
    model: 'Cms.model.MenuItem',
    defaultRootId: '',
    proxy: {
        type: 'ajax',
        url: '/PostData/MenuItemsGetByParent'
    }
});
 
//\Scripts\app\view\MenuItem\List.js
Ext.define('Cms.view.menuitem.List', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.menuitemlist',
    useArrows: true,
    rootVisible: false,
    root: {
        Id: '',
        Title: 'Root',
        HasChildren: true,
        expanded: false
    },
    store: 'MenuItemsTree',
    initComponent: function () {
 
        this.columns = [
            { header: 'Title', dataIndex: 'Title', xtype: 'treecolumn', width: 200 },
            { header: 'Url', dataIndex: 'Url', width: 200 },
            { header: 'CssClass', dataIndex: 'CssClass', width: 200 }
        ];
 
        this.callParent(arguments);
    }
});
 
//\Scripts\app\controller\MenuItems.js
Ext.define('Cms.controller.MenuItems', {
    extend: 'Ext.app.Controller',
 
    stores: ['MenuItemsTree'],
 
    models: ['MenuItem'],
 
    views: ['menuitem.List'],
 
    refs: [],
 
    init: function () {
 
    }
});
 
//\Scripts\App.js
Ext.Loader.setConfig({
    enabled: true
});
 
Ext.application({
    name: 'Cms',
    appFolder: 'scripts/app',
 
    controllers: [
        'MenuItems'
    ],
 
    launch: function () {
        Ext.widget('menuitemlist', {
            width: 650,
            height: 300,
            renderTo: 'output'
        });
    }
});