import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage('Congratulations, your extension "vscode-contrib1" is now active!');

    const api = {
        title: "vscode-contrib1 api"
    };

    return api;
}

export function deactivate() {}

