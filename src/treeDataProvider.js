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
    // Sample data
    constructor() {
        this.items = [
            new Item('exampleOne.file', [new Item('a line from the file'), new Item('another line from the file')]), 
            new Item('exampleTwo.file', [new Item('a line from the file')])
        ];
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

    setBookmark(parentId, label) {
        const parent = this.items.find(item => item.label === parentId);
      	if (!parent) {
         	this.items.push(new Item(parentId, [new Item(label)])); 
        } else {
          	parent.children.push(new Item(label));
        }
    }

    unsetBookmark() {
        
        // TODO

    }

    refresh() {
        this._onDidChangeTreeData.fire();
    }
}

module.exports = TreeDataProvider;