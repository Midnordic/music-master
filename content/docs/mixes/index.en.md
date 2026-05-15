---
title: "Mixes"
icon: "🎛️"
description: "Blend multiple tracks into one cohesive experience."
weight: 30
---

Mixes are tracks composed of several other tracks. They are used to create various effects by layering audio tracks on top of each other. Each mix type was created to support one of the cinematic techniques available in the app. However, mixes can also be used in your own creative ways.

## Adding mixes

Mixes can be added manually from the editor. From the **editor menu**, select one of the mixes to add.

{{< figure src="popup_menu.jpg" caption="Editor menu." class="docs-img" >}}

## Types of mixes

There are two types of mixes you can experiment with:
- Ambient Mix (*Ambient Mix*)
- Crossfade Mix (*Crossfade Mix*)

Each mix shares some common features:
- mix name (editable in the editor or Project view)
- playback buttons (visible in the editor and the main playlist)
- volume, speed, and stereo position controls
- ability to attach sound effects (*Output*)
- *Play, Pause, Resume, Stop* events
- **Add Track** button for adding tracks (editor view only)

## Ambient Mix

The Ambient Mix is designed for creating **soundscapes** — layered sets of sounds that simulate a specific environment.

For example, to recreate the interior of a tavern, you might combine the sound of conversations, clinking mugs, and muffled rain outside the window. All of these should play simultaneously.

The Ambient Mix allows you to play multiple tracks at once and easily manage their volume levels and loop settings.

### Presets

This mix allows you to define presets, which you can switch between with a single click. This way, you can keep multiple soundscapes in a single mix — configure each as a separate preset and switch between them during playback.

A preset remembers the volume level of each attached track and the mix’s own parameters (volume, speed, position).

To **rename** a preset, click the ✏️ button and enter a new name.

To **save** a preset, click the 💾 button.

To change the transition time between presets, set the value in the **Transition duration** field (in seconds).

{{< tip icon="shock" title="Oops!" >}}
Don’t forget to save the preset after adjusting track volumes.
{{< /tip >}}

{{< figure src="mix_ambient_editor.jpg" link="mix_ambient_editor.jpg" caption="Ambient mix with attached tracks." class="docs-img" >}}

### Now Playing view

When the mix is playing, it looks like this:

{{< figure src="mix_ambient_playing.jpg" link="mix_ambient_playing.jpg" caption="Ambient mix during playback." class="docs-img" >}}

From this view, you have access to all mix features except changing attached tracks — that can only be done in the editor.

## Crossfade Mix

The Crossfade Mix allows smooth transitions between tracks during playback. The selected track’s volume gradually increases while the others fade out, creating a seamless crossfade effect.

{{< figure src="mix_crossfade_editor.jpg" link="mix_crossfade_editor.jpg" caption="Crossfade mix with attached tracks." class="docs-img" >}}

### Transition time and buttons

The mix includes a **transition duration** parameter, which determines how many seconds the smooth transition takes.

Each attached track has a **transition button**, which raises the volume of the selected track and fades out the others.

### Now Playing view

When the mix is playing, it looks like this:

{{< figure src="mix_crossfade_playing.jpg" link="mix_crossfade_playing.jpg" caption="Crossfade mix during playback." class="docs-img" >}}

From this view, you have access to all mix features except modifying attached tracks — that can only be done in the editor.

## Sound effects

You can attach an effects mixer to any mix.

From the editor, create an effects mixer and connect it to the mix’s **Output**. Then you can add sound effects to the mixer.

{{< figure src="effects.jpg" link="effects.jpg" caption="Mix with attached sound effects mixer." class="docs-img" >}}

# Have Questions?

{{< docs-contact >}}