---
title: "Discord"
icon: "📢"
description: "Integration with the Discord application."
weight: 0
---

## What is Discord?

**Discord** is a platform for voice, text, and video communication, organized around servers and channels. Users can create communities, chat, join voice conversations, share their screen, and use bots and integrations.

More information: https://discord.com/

Music Master can integrate with Discord through a bot used for **streaming audio to a voice channel** (for example while playing online).

{{< tip icon="shock" title="Oops!" >}}
This feature is available in the full Windows version of Music Master. It is not available on Android or in the demo version.
{{< /tip >}}

## Bot installation and usage

Go through the following steps:
1. Install the Discord application (https://discord.com/download).
1. Install and activate the Music Master application [(installation and activation)](../docs/installation).
1. Start the Music Master and Discord applications.
1. In the Main Menu, select **Integrations -> Discord**.
{{< figure src="main_menu_discord.webp" caption="Menu item in the main menu." class="docs-img" >}}
1. A window with bot options will appear.
{{< figure src="discord_popup.webp" caption="Window with bot options." class="docs-img" >}}
1. Next, **invite the bot** to your server using the "Invite" button. A browser window will open, where you can choose the server you want to invite the bot to. After inviting it, the bot should appear on the server.
1. The next step is to link the bot with your user account. Click the "Link" 🔗 button, which will open a browser window where you can sign in to your Discord account. The application stores only the username and user ID.
1. To connect the bot to a voice channel:
	1. Join that voice channel in Discord.
	1. Click the join channel button ➜] in Music Master.
	1. After a moment, the bot should appear in the same channel.
1. From that point on, all audio played in the Music Master application will be audible in the Discord voice channel to all connected users.

## Streaming permissions

The server administrator should set the **required streaming role**. If a role is set, only users with that role will be able to connect to the bot and stream audio to the voice channel.
1. Connect the bot with a voice channel (see above).
1. In Discord chat, enter the `/setup role` command.
1. Choose the role that will allow using the bot and streaming audio.

{{< tip icon="shock" title="Warning!" >}}
If no role is assigned, any user who has Music Master will be able to use the bot on that server.
{{< /tip >}}

# Have Questions?

{{< docs-contact >}}