# async/await と lodash どんな感じで使うかのテスト

少し前に試しにやって見た問題。

## 問題

入力ファイル [input.json](./input.json) が以下のように与えられている時、各要素を 'prefix-suffix' とみて、「各 prefix ごとに suffix が最大のもの **以外** を返す」コードを javascript で書いてみる。

条件として `async/await` と `lodash` を必ず使うこと。ドキュメント調査力も調べるため、 `lodash` に親しんでいる場合は他の使ったことがないなんらかの類似ライブラリを使うこと。

```json
[
  "BBB-0003",
  "AAA-0003",
  "CCC-0003",
  "AAA-0002",
  "CCC-0005",
  "AAA-0001",
  "CCC-0002",
  "AAA-0004",
  "EEE-0003",
  "BBB-0002",
  "EEE-0001",
  "EEE-0002",
  "BBB-0001"
]
```

## 解答

[index.js](./index.js) が解答コード。実行方法は以下の手順。コードのビルドは webpack 覚えていなかったため `babel-cli`。

```bash
$ yarn
$ yarn build
$ yarn start
[ 'AAA-0001',
  'AAA-0002',
  'AAA-0003',
  'BBB-0001',
  'BBB-0002',
  'CCC-0002',
  'CCC-0003',
  'EEE-0001',
  'EEE-0002' ]
[ 'AAA-0003',
  'CCC-0003',
  'AAA-0002',
  'AAA-0001',
  'CCC-0002',
  'BBB-0002',
  'EEE-0001',
  'EEE-0002',
  'BBB-0001' ]
```

出力内容は、ソートする方法、並び順を変えない方法、の二つの結果。
