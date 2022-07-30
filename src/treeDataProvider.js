const vscode = require('vscode');

class Item extends vscode.TreeItem {
    constructor(label, children) {
        if (children) {
            super(label, vscode.TreeItemCollapsibleState.Expanded);
        } else {
            super(label, vscode.TreeItemCollapsibleState.None);
        }
        this.children = children;
    }
}

class TreeDataProvider {
    // Sample data
    constructor() {
        this.items = [
            new Item('Bookmarks', [
                new Item('exampleOne.file', [new Item('a line from the file'), new Item('another line from the file')]), 
                new Item('exampleTwo.file', [new Item('a line from the file')])
            ])
        ];
    }
    
    getTreeItem(treeItem) {
        return treeItem;
    }

    getChildren(parent) {
        if (parent === undefined) {
            return this.items;
        }
        return parent.children;
    }
}

module.exports = TreeDataProvider;