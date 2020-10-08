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
                            vscode.window.showInformationMessage('extension.activate api: ' + api.title);
                        } catch (error) {
                            console.error(error);
                        }
                    } else {
                        api = extension.exports;
                        vscode.window.showInformationMessage('extension.exports api: ' + api.title);
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

