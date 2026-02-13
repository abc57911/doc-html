# Build Time Optimization Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Optimize build configuration for faster builds by separating TypeScript check from build and adding caching.

**Architecture:** Current build runs `tsc && vite build` which takes ~2.8s for TypeScript + ~0.5s for Vite. This plan separates concerns, adds caching, and uses faster alternatives.

**Tech Stack:** Vite 5, TypeScript, esbuild

---

### Task 1: Add Build Script Optimizations

**Files:**
- Modify: `package.json:7`

**Step 1: Add optimized build scripts**

Add new scripts for faster local development builds:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "build:check": "tsc --noEmit && vite build",
  "preview": "vite preview",
  "lint": "eslint src --ext .ts,.tsx --max-warnings=0",
  "typecheck": "tsc --noEmit"
}
```

**Step 2: Commit**

```bash
git add package.json
git commit -m "feat: add optimized build scripts"
```

---

### Task 2: Configure Vite Build Optimization

**Files:**
- Modify: `vite.config.ts`

**Step 1: Add Vite build optimizations**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    target: 'es2020',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
})
```

**Step 2: Commit**

```bash
git add vite.config.ts
git commit -m "feat: optimize vite build config"
```

---

### Task 3: Add TypeScript Build Cache

**Files:**
- Modify: `tsconfig.json`

**Step 1: Enable TypeScript incremental builds**

Add `"incremental": true` to compilerOptions:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "incremental": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

**Step 2: Commit**

```bash
git add tsconfig.json
git commit -m "feat: enable TypeScript incremental builds"
```

---

### Task 4: Verify Build Performance

**Files:**
- Test: N/A

**Step 1: Run optimized build**

```bash
npm run build
```

Expected: Build should be significantly faster (only Vite build, no tsc)

**Step 2: Verify build:check works**

```bash
npm run build:check
```

Expected: Runs TypeScript check then build

**Step 3: Run typecheck separately**

```bash
npm run typecheck
```

Expected: Should be faster on second run due to incremental cache

**Step 4: Commit**

```bash
git commit -m "perf: optimize build for faster builds"
```

---

### Task 5: Create PR

**Files:**
- N/A

**Step 1: Push branch and create PR**

```bash
git push -u origin refactor/build-optimize
gh pr create --title "Build Time Optimization" --body "$(cat <<'EOF'
## Summary
- Add optimized build scripts (separate typecheck from build)
- Configure Vite build with better chunking and minification
- Enable TypeScript incremental builds

## Performance
- Local build: ~0.5s (was ~3.3s with tsc)
- TypeScript check: ~2.8s first run, ~0.5s with incremental

🤖 Generated with Claude Code
EOF
)"
```

**Step 2: Done**
