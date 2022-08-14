/* eslint-disable @typescript-eslint/semi */
import * as vscode from "vscode"

export function activate(context: vscode.ExtensionContext) {
  console.log('rx-analyzer activated')

  let disposable = vscode.commands.registerCommand(
    "rx-analyzer.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from rx-analyzer!")
    }
  )

  context.subscriptions.push(disposable)
}

export function deactivate() {}
