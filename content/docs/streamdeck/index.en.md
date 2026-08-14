---
title: "Stream Deck"
icon: "🎮"
description: "Integration with the Stream Deck application."
weight: 0
---

## What is Stream Deck?

**Stream Deck** is a controller with programmable buttons, connected to an application that lets you launch shortcuts, macros, and actions in other programs with a single click — for example switching scenes, controlling audio, triggering effects, playlists, or app functions.

More information: https://www.elgato.com/ww/en/p/stream-deck

Stream Deck can become a **convenient controller for Music Master** — instead of clicking in the interface, you can quickly trigger music, soundboards, cinematic techniques, and other program functions using a button on the controller.

{{< tip icon="shock" title="Oops!" >}}
This feature is available in the full Windows version of Music Master. It is not available on Android or in the demo version.
{{< /tip >}}

## Plugin installation

Go through the following steps:
1. Install the Stream Deck application (https://www.elgato.com/ww/en/s/downloads).
1. Install and activate the Music Master application [(installation and activation)](../docs/installation).
1. Install the plugin:
	1. Open the "Plugins" folder in the main Music Master directory (usually `C:\Users\[user]\AppData\Local\MusicMaster\Plugins`)
	1. Run the `net.midnordic.musicmaster.streamdeck.streamDeckPlugin` file
{{< figure src="plugin_file.webp" caption="The plugin file." class="docs-img" >}}
	1. Confirm that you want to install the Music Master plugin.
{{< figure src="plugin_confirm.webp" caption="Installation confirmation." class="docs-img" >}}
1. Start the Stream Deck application (it should launch automatically during plugin installation).
1. Start the Music Master application.
1. In the Main Menu, select **Integrations -> Stream Deck**.
{{< figure src="main_menu.webp" caption="Menu item in the main menu." class="docs-img" >}}
1. The message **"Connecting to Stream Deck..."** will appear.
1. After a short moment, the connection between Music Master and Stream Deck should be established.

## Using the plugin

After installing the plugin, a "Music Master" entry will appear in the Stream Deck application.
{{< figure src="streamdeck_plugin.webp" caption="View of the first few actions." class="docs-img" >}}

It contains all buttons available in the plugin. To set one up, simply drag it onto an appropriate empty slot.

### General buttons
- Hotkey - a general shortcut button that can be used when assigning shortcut keys in Music Master. To use it, select the appropriate shortcut (*hotkey*) in the application and press this button on the controller. The shortcut will be assigned to that button. You can assign both global shortcuts and shortcuts for individual tracks.

### Volume buttons
- Master Volume Up - increases volume by 5%.
- Master Volume Down - decreases volume by 5%.
- Master Volume Mute / Unmute - mutes / restores volume.

### Buttons affecting all tracks
- Resume All Tracks - all paused tracks will be resumed.
- Pause All Tracks - all currently playing tracks will be paused.
- Stop All Tracks - all tracks will be stopped.

### Buttons affecting the active playlist
- Play Next Track - moves to the next track.
- Play Previous Track - moves to the previous track.
- Play / Pause Current Track - resumes / pauses the currently playing track.
- Stop Current Track - stops the currently playing track.
- Fade In/Out Current Track - gradually fades out / fades in the currently playing track.

### Configurable buttons
- Play / Pause Track - plays / pauses a selected track.
- Play SFX - plays a selected soundboard track.

# Have Questions?

{{< docs-contact >}}