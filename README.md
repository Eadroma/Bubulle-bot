# 🫧 Bubulle-bot

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8d2ea1d6b083488d9ca09fbd6acac76e)](https://app.codacy.com/gh/Eadroma/Bubulle-bot?utm_source=github.com&utm_medium=referral&utm_content=Eadroma/Bubulle-bot&utm_campaign=Badge_Grade)

> A Nostale community-based Discord bot. 

Refactored for **Node.js 20+** and **Discord.js v14**, this bot provides custom character sheets, random chance utility, and administration embedded messages for the Bubulle family! 

## ✨ Features
- **Character Sheets (`!fiche`)**: Initialize and view detailed user profiles with Stats (Agility, Strength, Mental, Charisma, HP) directly through Rich Embedded interface.
- **Stat Modifications (`!add`)**: Allows admins (whitelist-locked) to manipulate character stats.
- **Utility**: Provides ping tests and random number generation (`!random`).

## ⚙️ Setup & Installation

### Requirements
- **Node.js**: v18 or higher (v20+ recommended).
- A **Discord Bot Token** obtained from the [Discord Developer Portal](https://discord.com/developers/applications).

### Step 1: Discord Developer Portal Intents
**CRITICAL:** Because this bot parses legacy message content strings (e.g. `!fiche`), you **must** turn on the **Message Content Intent** in the Discord Developer portal under your Bot settings.

### Step 2: Configure the Bot
Clone the repository, then copy the configuration stub:
```bash
cp assets/config.example.json assets/config.json
```
Then, edit `assets/config.json` passing your raw `token`:
```json
{
  "token": "YOUR_DISCORD_BOT_TOKEN_HERE",
  "prefix": "!"
}
```

### Step 3: Start Node
Start the bot using the auto-restart nodemon script:
```bash
npm install
npm run dev
# OR simply
node app.js
```

## 📜 Commands
| Command | Usage | Description |
| ---- | --------- | ----- |
| `!setfiche` | `!setfiche [@user]` | Initializes a fresh empty character sheet. |
| `!fiche` | `!fiche [@user]` | Displays a robust Discord Embed of all profile info and stats. |
| `!add` | `!add [stat] [target_id] [value]` | Modifies stats! Used internally for game mechanics. |
| `!random` | `!random [max_number]` | Triggers a 1 to N dice roll with animation format. |
| `!help` | `!help [command]` | Lists all available tools. |
