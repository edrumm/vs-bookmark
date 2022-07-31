/*
	Extension description
*/
const vscode = require('vscode');
const TreeDataProvider = require('./src/treeDataProvider');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const dataProvider = new TreeDataProvider();
	vscode.window.registerTreeDataProvider('bookmarkList', dataProvider);

	const toggle = vscode.commands.registerCommand('vs-bookmark.toggle', () => {
		vscode.window.showInformationMessage('Toggle');
	});

	const jump = vscode.commands.registerCommand('vs-bookmark.jump', () => {
		vscode.window.showInformationMessage('Jump');
	});

	const list = vscode.commands.registerCommand('vs-bookmark.list', () => {
		vscode.window.showInformationMessage('List');
	});

	const listAll = vscode.commands.registerCommand('vs-bookmark.listAll', () => {
		vscode.window.showInformationMessage('List all');
	});

	const clear = vscode.commands.registerCommand('vs-bookmark.clear', () => {
		vscode.window.showInformationMessage('Clear');
	});

	const clearAll = vscode.commands.registerCommand('vs-bookmark.clearAll', () => {
		vscode.window.showInformationMessage('Clear all');
	});

	// Test only
	const refresh = vscode.commands.registerCommand('vs-bookmark.refresh', () => {
		dataProvider.refresh();
	});

	context.subscriptions.concat([
		toggle,
		jump,
		list,
		listAll,
		clear,
		clearAll,
		refresh
	]);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
};
