const vscode = require('vscode');

class Item extends vscode.TreeItem {
    constructor(label, children) {
        if (children) {
            super(label, vscode.TreeItemCollapsibleState.Expanded);
        } else {
            super(label, vscode.TreeItemCollapsibleState.None);
        }
        this.children = children || [];
    }
}

/**
 * @implements {vscode.TreeDataProvider<Item>}
 */
class TreeDataProvider {
    constructor() {
        this.items = [];
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    }
    
    getTreeItem(treeItem) {
        return treeItem;
    }

    getChildren(parent) {
        if (!parent) {
            return this.items;
        }
        return parent.children;
    }

    contains(parentId, label) {
        const parent = this.items.find(item => item.label === parentId);
        if (!parent) return false;

        const item = parent.children.find(item => item.label === label);
        return parent.children.includes(item);
    }

    setBookmark(parentId, label) {
        const parent = this.items.find(item => item.label === parentId);
      	if (!parent) {
         	this.items.push(new Item(parentId, [new Item(label)])); 
        } else {
          	parent.children.push(new Item(label));
        }
    }

    unsetBookmark(parentId, label) {
        const parent = this.items.find(item => item.label === parentId);
        const bookmark = parent.children.find(item => item.label === label);
        parent.children.splice(parent.children.indexOf(bookmark), 1);

        if (parent.children.length === 0) {
            this.items.splice(this.items.indexOf(parent), 1);
        }
    }

    refresh() {
        this._onDidChangeTreeData.fire();
    }

    clear(parentId) {
        if (parentId === undefined) {
            this.items = [];
        } else {
            const parent = this.items.find(item => item.label === parentId);
            parent.children = [];
        }
    }
}

module.exports = TreeDataProvider;