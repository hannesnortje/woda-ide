import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Register the command to open the webview
    const disposable = vscode.commands.registerCommand('woda-ide.openWebview', () => {
        const panel = vscode.window.createWebviewPanel(
            'wodaWebview', // Identifies the type of the webview
            'Woda IDE',    // Title of the panel displayed to the user
            vscode.ViewColumn.One, // Editor column to show the webview
            { enableScripts: true } // Options to allow scripts in the webview
        );

        // Set the content of the webview
        panel.webview.html = getWebviewContent();
    });

    context.subscriptions.push(disposable);
}

function getWebviewContent() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Woda IDE</title>
        <style>
            body, html {
                height: 100%;
                margin: 0;
                padding: 0;
            }
            iframe {
                width: 100%;
                height: 100%;
                border: none;
            }
        </style>
    </head>
    <body>
        <iframe src="https://test.wo-da.de/EAMD.ucp/Components/com/ceruleanCircle/EAM/5_ux/WODA/2.4.2/src/html/WODA.html"></iframe>
    </body>
    </html>`;
}
