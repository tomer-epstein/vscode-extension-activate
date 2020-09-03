import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage('Congratulations, your extension "vscode-manager" is now active!');

	let disposable = vscode.commands.registerCommand('extension.activateContributor', async () => {
		try {
            const allExtensions: readonly vscode.Extension<any>[] = vscode.extensions.all;
            for (const extension of allExtensions) {
                if (extension.id === "saposs.vscode-contrib1") {
                    let api;
                    if (!extension.isActive) {
                        try {
                            api = await extension.activate();
                        } catch (error) {
                            console.error(error);
                        }
                    } else {
                        api = extension.exports;
                    }
                    return api;
                }
            }
        } catch (error) {
			vscode.window.showInformationMessage(error);
		}
	});

	context.subscriptions.push(disposable);

}

export function deactivate() {}

