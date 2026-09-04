# CM 3321 – Logic Programming and Artificial Cognitive Systems
### Revision & Examination Preparation Platform

A comprehensive, interactive study platform designed for the **CM 3321 Logic Programming and Artificial Cognitive Systems** curriculum (University of Moratuwa, Faculty of Information Technology, Batch 21).

---

## 🚀 Hosting on GitHub & GitHub Releases

### 1. Host for Free on GitHub Pages
This repository includes an automated GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) configured with relative asset resolution (`base: './'`).

**To enable hosting:**
1. Export or push this repository to your GitHub account.
2. In your GitHub repository, go to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Push a commit to `main` (or run the workflow manually from the **Actions** tab).
5. Your platform will be live at:
   ```
   https://<your-username>.github.io/<repository-name>/
   ```

---

### 2. Publishing a GitHub Release
An automated GitHub Release workflow is configured in `.github/workflows/release.yml`.

**Option A: Trigger via Git Tag**
```bash
git tag v1.0.0
git push origin v1.0.0
```
This automatically compiles the project, packages `dist/` into `cm3321-revision-dist.zip`, and creates an official release under the **Releases** tab.

**Option B: Trigger manually via GitHub Actions UI**
1. Navigate to the **Actions** tab in your GitHub repository.
2. Select **Create GitHub Release** on the left.
3. Click **Run workflow**, enter a release tag (e.g. `v1.0.0`), and run.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📚 Core Features
- **Past Paper Solutions**: Complete dual-level answers (Exam-ready concise format & in-depth learning breakdowns) with mark breakdowns.
- **Lecture Notes**: Comprehensive notes aligned with Dr. Rukshima Dabare's slide decks (Propositional Logic, Predicate Logic, Prolog, SWI-Prolog, Cognitive Architectures, Expert Systems).
- **Interactive Revision**: High-yield formulas, truth table visualizers, Prolog query traces, and concept explorers.
- **Dark/Light Mode**: Full responsive interface tailored with modern typography and clean minimalism.
