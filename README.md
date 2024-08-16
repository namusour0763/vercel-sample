# Vercel Sample

Vercel Functions, Vercel Postgres を使ってみる。

## 成果物

Vercel Postgres に格納したデータを Vercel Functions でフェッチし表示する Web サイト。

![site](/images/site.png)
![postgres](/images/postgres.png)

## 前提条件

- GitHub / Vercel にサインアップしておくこと
- node, npm が使えるようにしておくこと

## 作業メモ

### プロジェクト作成

```bash
# プロジェクト作成
npx create-next-app

✔ What is your project named? … vercel-sample
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … No
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … No
Creating a new Next.js app in /Users/xxxxxx/Desktop/vercel-sample.

Success! Created my-app at /Users/xxxxxx/Desktop/vercel-sample

# Next.js のスタートページを確認
npm run dev
```

### コード編集

```bash
cd vercel-sample

# 不要なファイル削除
# layout.tsx は npm run dev すると自動で作成される
rm app/global.css app/layout.tsx

# vercel/postgres をインストール
npm install @vercel/postgres

# ファイル作成 & ファイル編集
```

### データ投入

詳細は Getting Started を確認すること。

![getting_started](/images/getting_started.png)

```bash
# Vercel コマンドを利用可能に
npm install -g vercel

# ログイン
vercel login
Vercel CLI 36.0.0
? Log in to Vercel (Use arrow keys)
❯ Continue with GitHub
  Continue with GitLab
  Continue with Bitbucket
  Continue with Email
  Continue with SAML Single Sign-On

# 開発環境をローカルでデプロイ（npm run dev でもいいかも）
vercel dev

# ブラウザで Vercel のプロジェクトを開く
# Storage から Postgres を作成

# データベースへの接続情報を配置
vercel env pull .env.development.local

# Data > Query から以下の SQL を実行
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

INSERT INTO products (name, price) VALUES
  ('Product 1', 19.99),
  ('Product 2', 29.99),
  ('Product 3', 39.99);

# Ctrl + C で一度サーバーを止め、再起動しデータが表示されるか確認
# データが更新されない場合は Ctrl + Shift + R でキャッシュを無視したリロード
vercel dev
```
