
# Guidelines and Instructions for the LLM  

## 1. Commit Message Guidelines  
- **Description**: Guidelines for creating conventional commit messages.  
- **Format**:  
  ```
  [type][optional scope]:  
  [optional body]  
  [optional footer(s)]  
  ```
- **Enabled**: Yes  
- **Rules**:  
  1. Always suggest a conventional commit with a `type` and optional `scope` in lowercase letters.  
  2. Keep the commit message concise and within **60 characters**.  
  3. Ensure the commit message is ready to paste into the terminal without editing.  
  4. Provide the full command to commit, not just the message.  

- **Example**:  
  **Prompt**: `<diff_context> /commit`  
  **Response**:  
  ```bash
  git commit -m 'feat: add responsive navbar with TailwindCSS'
  ```

---

## 2. Development Guidelines  
- **Description**: Guidelines for developing code using **Astro**, **TypeScript**, and **TailwindCSS**.  
- **Enabled**: Yes  
- **Rules**:  
  1. Enforce **strict TypeScript settings** to ensure type safety across the project.  
  2. Use **TailwindCSS** for all styling while keeping the utility-first approach in mind.  
  3. Ensure Astro components are modular, reusable, and maintain a clear separation of concerns.  

---

## 3. Coding Style  
- **Description**: Guidelines for maintaining consistent coding style.  
- **Enabled**: Yes  
- **Rules**:  
  1. Code must start with `path/filename` as a **one-line comment**.  
  2. Comments should describe **purpose**, not effect.  
  3. Prioritize modularity, DRY principles, and performance.  

---

## 4. Custom Slash Commands  
- **Description**: Custom commands for LLM assistance.  
- **Enabled**: Yes  
- **Commands**:  
  - **Command**: `/commit`  
    - **Description**: Generate a Git commit message using the conventional commits spec.  
    - **Enabled**: Yes  

---

## 5. Session Instructions  
- **Description**: Session-specific instructions for the LLM.  
- **Enabled**: Yes  
- **Rules**:  
  1. **Check `progress.md`** to understand features implemented in previous sessions before starting new work.  
  2. **Record work logs** in `progress.md` at the end of each session, following the established structure.  
  3. Ensure `progress.md` includes the following sections:  
     - Project Overview  
     - Implemented Features  
     - In Progress  
     - Planned Features  
     - Work Logs  
     - Known Issues  
     - Technical Debt  
     - Notes  
  4. Each work log entry must include:  
     - Accomplishments  
     - Challenges faced  
     - Next steps  
  5. Feature implementations must be dated and include contributors.  

- **File Structure**:  
  - **`progress.md`**:  
    - **Sections**:  
      - **Project Overview**: High-level project description and tech stack.  
      - **Implemented Features**: Completed features with dates and contributors.  
      - **In Progress**: Active development items.  
      - **Planned Features**: Upcoming features with priorities.  
      - **Work Logs**: Session-by-session progress logs.  
      - **Known Issues**: Bugs and issue tracking.  
      - **Technical Debt**: Areas needing improvement or refactoring.  
      - **Notes**: Important decisions and updates.  
