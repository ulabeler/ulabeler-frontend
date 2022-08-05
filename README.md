# Ulabeler Frontend

## 開発環境準備

### 共通

1. 任意のディレクトリに`git clone`してから`cd ulabeler-frontend`する。

### Docker を利用する場合

Docker のセットアップまで済んでいることが前提

1. VSCode で開き、`reopen in container`をする。
1. 無事に開いたら`yarn dev`と入力しあとは開発するだけです。ファイルが保存されるたびコンパイルが走るので再度打ち直す必要はありません。

### ローカルで開発する場合

Node.js がインストールされていることが前提です。
16 系であれば問題ないです。(参考までに devcontainer では 18.4.0、CloudflarePages でのビルドには 16.16.0 を利用しています)

1. `yarn`と入力する
1. VSCode を開き`yarn dev`と入力しあとは開発するだけです。ファイルが保存されるたびコンパイルが走るので再度打ち直す必要はありません。
