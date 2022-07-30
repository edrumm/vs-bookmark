/*
	Extension description
*/
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

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

	// context.subscriptions.push(activate, toggle);
	context.subscriptions.concat([
		toggle,
		jump,
		list,
		listAll,
		clear,
		clearAll
	]);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
