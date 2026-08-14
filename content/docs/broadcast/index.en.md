---
title: "Broadcast"
icon: "📡"
description: "Stream Music Master audio directly to listeners in a web browser."
weight: 0
---

## What is Broadcast?

**Broadcast** streams Music Master's final audio mix directly to your players. Listeners only need a web browser — they do not need to install Music Master or create an account.

Music Master creates a temporary room with a link and a four-digit PIN. Share both with your listeners so they can hear the session audio.

{{< tip icon="shock" title="Oops!" >}}
This feature is available in the full Windows version of Music Master. It is not available on Android or in the demo version.
{{< /tip >}}

## Starting a broadcast

1. Start Music Master and open or create a project.
1. In the Main Menu, select **Integrations -> Broadcast**.

{{< figure src="main_menu_broadcast.webp" caption="Broadcast entry in the Integrations menu." class="docs-img" >}}

1. The Broadcast window will open. Select **Start**.
1. The first time the Broadcast host starts, Windows may display a firewall permission popup for **MusicMaster.Plugins.Broadcast**. Select **Allow access** so the host can connect to listeners through the internet.
1. Wait until the status changes to **Ready**. Music Master will display a room link and a four-digit PIN.
1. Use the copy buttons next to the link and PIN, then send both values to your listeners.

{{< figure src="broadcast_popup.webp" caption="Broadcast control window with the room link and PIN." class="docs-img" >}}

Keep Music Master and the Broadcast window running during the session. The window displays the current status and number of connected listeners.

{{< tip icon="question" title="Watch out!" >}}
If you deny or close the Windows permission popup, listeners may be unable to connect. Allow **MusicMaster.Plugins.Broadcast** through Windows Firewall. You can change this later in **Windows Security -> Firewall & network protection -> Allow an app through firewall**.
{{< /tip >}}

## Joining as a listener

Each listener should:

1. Open the shared room link in a browser.
1. Enter the four-digit PIN.
1. Select **Join Audio**.
1. Wait for the browser to establish the connection and begin playing the stream.

{{< figure src="broadcast_room.webp" caption="Broadcast room webpage." class="docs-img" >}}

If the browser blocks automatic audio playback, the listener may need to interact with the page or allow audio playback for the site.

## Volume and mute controls

Use the volume slider in the Broadcast window to change the level sent to listeners. This adjustment affects only the broadcast and does not change Music Master's main output volume.

Enable **Mute broadcast** to temporarily silence the stream without closing the room.

## Ending a broadcast

Select **Stop & Close** or close the Broadcast window. Music Master disconnects all listeners and closes the temporary room. The old link and PIN cannot be reused; starting another broadcast creates a new room.

## Broadcast and Discord

Broadcast and Discord streaming cannot run at the same time because both integrations use Music Master's final audio stream. Stop the active integration before starting the other one.

## Privacy and connection limits

- Audio travels directly from your computer to each listener through WebRTC. The Music Master service coordinates the connection but does not relay or store the audio.
- Anyone who has both the room link and PIN can listen while the room is active. Share them only with the intended players.
- A room supports up to six simultaneous listeners.
- Rooms are temporary and close when the broadcaster disconnects.

## Troubleshooting

### A listener cannot connect

- Check that the link and PIN were copied correctly.
- Make sure the Broadcast window still shows **Ready** or **Broadcasting**.
- Ask the listener to use an up-to-date browser and reload the room page.
- Check firewall, VPN, and network restrictions on both sides.

Broadcast uses a direct WebRTC connection. Some restrictive workplace, school, mobile, or VPN networks block this traffic. Connection may be impossible on those networks. Trying a different network often resolves the problem.

### The listener is connected but cannot hear audio

- Make sure **Mute broadcast** is disabled and the broadcast volume is above zero.
- Play a track in Music Master and confirm it is audible locally.
- Ask the listener to allow audio playback in the browser and check the browser tab and device volume.

### The room closed unexpectedly

Keep Music Master running and connected to the internet. Closing the Broadcast window, exiting Music Master, or losing the broadcaster's connection closes the room.

# Have Questions?

{{< docs-contact >}}
