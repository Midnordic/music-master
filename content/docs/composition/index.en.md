---
title: "Project"
icon: "🧩"
description: "Explanation of what a project is and how to add tracks."
weight: 80
---

A project consists of all elements: tracks, events, playlists, soundboards, and cinematic techniques. It’s the complete unit you’re currently working on.

## Media (left column)

The left column contains two tabs:
* **Tracks**: all tracks added to the project.
* **Events**: events created automatically by cinematic techniques or created manually in the editor.

Tracks and events can be added to playlists.

## Playlists and Cinematic Techniques (middle column)

The middle column is split into two parts:
* **Playlists & Soundboards**: the top part contains playlists and soundboards. This is where you set up your playlists and add sound effects for quick access during a session.
* **Cinematiques**: the bottom part contains the list of cinematic techniques added to the project.

## Inspector (right column)

The right column is the **Inspector**, where properties of the selected items are displayed. You can edit properties of tracks and cinematic techniques there.

{{< figure src="project_view_full.jpg" link="project_view_full.jpg" target="_blank" caption="Example project." class="docs-img" >}}

## Adding tracks {#adding-tracks}

To add tracks to the project:
1. In the left column, click **Import** (the large plus icon) and choose **"Import files..."** or **"Import folder..."** from the dropdown menu.
1. Select the files or folders you want to add.
1. After confirming, supported audio files will be added to the project tree.

{{< figure src="add_tracks.jpg" caption="Import menu" class="docs-img" >}}

Supported audio file formats:
- .wav  
- .mp3  
- .ogg  

{{< tip icon="ok" title="Hint" >}}
You can also add a track or an entire folder by dragging it directly into the application window.
{{< /tip >}}

## Removing tracks {#removing-tracks}

To remove tracks from the project, select them and click the **trash** icon.

{{< tip icon="shock" title="Oops!" >}}
Removing a track from the project tree will remove it from everywhere — playlists, soundboards, and cinematic techniques. All connections created in the editor to and from that element will be lost.
{{< /tip >}}

## Saving and loading projects {#saving}

Each project can be saved to a file (with the `.mm` extension) and later loaded again.

{{< figure src="main_menu.jpg" caption="Main menu" class="docs-img" >}}

Using the main menu (top-left corner), you can:
- **"New Project..."**: create a new empty project.
- **"Save Project..."**: save the project to a file.
- **"Load Project..."**: load the project from a file.
- **"Load Autosave"**: load the auto-saved project.

{{< tip icon="question" title="Watch out!" >}}
The file stores relative paths to audio files. This means that if you move a track to a different folder, the project containing it will not load correctly. To avoid problems, it’s best to save the project in the same folder as your audio files.
{{< /tip >}}

# Have questions?

{{< docs-contact >}}
