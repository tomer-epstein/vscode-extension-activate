import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage('Congratulations, your extension "vscode-activation-event" is now active!');

	let disposable = vscode.commands.registerCommand('extension.activateMyself', async () => {
		try {
            const allExtensions: readonly vscode.Extension<any>[] = vscode.extensions.all;
            for (const extension of allExtensions) {
                if (extension.id === "saposs.vscode-activation-event") {
                    let api;
                    try {
                        api = await extension.activate();
                        vscode.window.showInformationMessage('extension.activate api: ' + api.title);
                    } catch (error) {
                        vscode.window.showInformationMessage('Error: ' + error);
                    }
                }
            }
        } catch (error) {
			vscode.window.showInformationMessage(error);
		}
	});

	context.subscriptions.push(disposable);

    const api = {
        title: "vscode-activation-event api"
    };

    return api;
}

export function deactivate() {}

