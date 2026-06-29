# Publish Guide: GitHub + Supabase + Vercel

## 1. Supabase Setup

1. Create a project at Supabase.
2. Open SQL Editor.
3. Copy and run `supabase-setup.sql`.
4. Go to Project Settings > API.
5. Copy:
   - Project URL
   - anon public key
6. Open `app.js` and replace:
   - `PASTE_YOUR_SUPABASE_PROJECT_URL`
   - `PASTE_YOUR_SUPABASE_ANON_KEY`

## 2. GitHub Upload

Upload these files/folders to your GitHub repository:

- `index.html`
- `shifting-process.html`
- `domestic-moving.html`
- `international-moving.html`
- `service.html`
- `contact.html`
- `style.css`
- `app.js`
- `vercel.json`
- `assets/`
- `supabase-setup.sql`
- `PUBLISH_GUIDE.md`

Do not upload private service role keys. The Supabase anon key is okay for frontend use when Row Level Security policies are correct.

## 3. Vercel Deploy

1. Login to Vercel.
2. Click Add New > Project.
3. Import your GitHub repository.
4. Framework Preset: Other.
5. Build Command: leave empty.
6. Output Directory: leave empty or use `./`.
7. Deploy.

If Vercel shows `404: NOT_FOUND`, check these first:

- The GitHub repository root must contain `index.html`.
- `vercel.json` must be uploaded to GitHub.
- Vercel Project Settings > Root Directory should be empty unless your files are inside a subfolder.
- Framework Preset should be `Other`.
- Build Command should be empty.
- Output Directory should be empty or `./`.

## 4. Domain Setup

In Vercel:

1. Open Project > Settings > Domains.
2. Add `shifteasyindia.com`.
3. Add `www.shifteasyindia.com` if needed.
4. Update DNS records at your domain provider exactly as Vercel shows.
5. Wait for SSL to become active.

## 5. Test

After deploy, open:

- `https://shifteasyindia.com/`

Submit a test enquiry and check Supabase Table Editor > `enquiries`.
