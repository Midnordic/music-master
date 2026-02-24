---
title: "Playing Tracks"
icon: "▶️"
description: "Tracks can be played in several ways — learn how."
weight: 60
---

A track can be played in multiple ways:
- from the main playlist  
- from the sound effects playlist  
- using events  
- from the editor view  
- from the “Now Playing” view  

Tracks are played in three different modes:
- exclusive  
- layered  
- single  

Each mode behaves differently and offers different possibilities.

## Playback Modes {#modes}

### Exclusive (Main Playlists)

Only one track can play in this mode at a time.  

When you start a new track, all other tracks using this mode will be stopped.

This mode is used by the main playlists to simulate the behavior of a traditional music player.

### Layered (Sound Effects Playlists)

Any number of tracks can play simultaneously in this mode.  

Starting a new track will not stop others using this mode.

This mode is used by the sound effects playlists. It allows you to play the same sound effect multiple times, layering them on top of each other.

### Single

Only one instance of a given track can play at a time.  

Starting that track again will not stop other tracks using this mode.

This mode is used by the editor and events. It supports more complex logic and enables advanced sound design operations.

## Playing Tracks from the Main Playlist (Exclusive Mode) {#playlist}

Tracks in the playlist have buttons for play, pause, and stop — just like in other music players.

The pause button appears when the track is currently playing.

{{< figure src="playlist_buttons.jpg" caption="Fig. 1 - Play button in the main playlist." class="docs-img" >}}

## Playing Tracks from the Sound Effects Playlist (Layered Mode) {#sfx}

Tracks in the sound effects playlist appear as symbol buttons. 

To play a track, simply press its corresponding button.

{{< figure src="playlist_buttons2.jpg" caption="Fig. 2 - Buttons in the sound effects playlist." class="docs-img" >}}

## Playing Tracks Using Events (Single Mode) {#events}

Events can be added to both the main playlist and the sound effects playlist.

If an event is added to the main playlist, it includes a **“Trigger”** button that allows you to activate it manually.  

If the event is configured to start a track, that track will begin playing.

{{< figure src="playlist_buttons3.jpg" caption="Fig. 3 - Event trigger button in the main playlist." class="docs-img" >}}

## Playing Tracks from the Editor View (Single Mode)

Every track can also be found in the editor, represented as a node (block).  

Click the **“Play”** icon on the node to play the track in single mode.

{{< figure src="editor_buttons.jpg" caption="Fig. 4 - Play button on a track node in the editor." class="docs-img" >}}

## Playing Tracks from the “Now Playing” View {#nowplaying}

The **Now Playing** view shows all currently playing tracks.  

Each track includes playback control buttons, similar to those in the playlist.

{{< figure src="nowplaying_buttons.jpg" caption="Fig. 5 - Track in the 'Now Playing' view." class="docs-img" >}}

## Controlling All Playing Tracks {#nowplaying2}

At the top of the **Now Playing** view, there are global control buttons that affect all currently playing tracks.  
They allow you to:
- resume all paused tracks  
- pause all tracks  
- stop all tracks  

{{< figure src="nowplaying_buttons_global.jpg" caption="Fig. 6 - Global playback control buttons." class="docs-img" >}}

These buttons are useful when you want to stop everything at once without managing each track individually.

## Track Parameters {#parameters}

The following track parameters can be changed during playback:
- volume (0–100%)  
- speed (0.1–2.0×)  
- panning (left speaker only – both speakers – right speaker only)  

Arrow buttons reset parameters to their default values.

{{< tip icon="ok" title="Hint" >}}
Changing playback speed also changes pitch. To change speed without affecting pitch, use sound effects.
{{< /tip >}}

You can also enable looping by checking the **“Loop”** box.  
The number of repetitions can be set from 0 (infinite) to 100×.

{{< figure src="track_params.jpg" caption="Fig. 7 - Track parameters." class="docs-img" >}}

# Have Questions?

{{< docs-contact >}}