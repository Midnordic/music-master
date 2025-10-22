---
title: "Playback Events"
icon: "⚡"
description: "Learn what playback events are and how to use them to create your own automation."
weight: 38
---

## What are playback events?

A **Playback Event** is a change in a track’s state — for example, from playing to finished.  

You can program reactions to any event — such as when a track starts, pauses, resumes, stops, loops, or finishes.  

Each playback event has **input and output slots** that you can connect to other elements in the editor.

Available playback events:
- **Play / On Play** — track starts playing  
- **Pause / On Pause** — track is paused  
- **Resume / On Resume** — playback resumes  
- **Stop / On Stop** — playback stops  
- **Loop / On Loop** — loop point (transition from end to start)  
- **Finish / On Finish** — track finishes  

{{< figure src="events.jpg" caption="Fig. 1 – Playback events assigned to a track." class="docs-img" >}}

## How do Playback Events work?

Each time a playback event occurs (for example, when a track starts, pauses, or finishes), the **corresponding output slot (on the right side)** is triggered.  

In the editor, you can **connect events and their slots** to control other elements:
- A connection to an **input slot** (left side) triggers that event and its output slot.  
- A connection to an **output slot** (right side) makes that slot trigger other connected slots.

This way, you can design complex reactions — for example, making one track automatically start when another finishes.

## Example 1: *Play / On Play* event

{{< figure src="play_example.jpg" caption="Fig. 2 – Example of a Play event." class="docs-img" >}}

In this example, we connected the **Play** events of two tracks.  

When the first track (*Dark Bar*) starts playing, its **On Play** output slot is activated.  
That slot is connected to the **Play** event of the second track, causing it to start automatically.

**Result:** starting the first track automatically triggers the second.

## Example 2: *Finish / On Finish* event

{{< figure src="finish_example.jpg" caption="Fig. 3 – Example of a Finish event." class="docs-img" >}}

Here, the **Finish** event of the first track (specifically its output slot) is connected to the **Play** event of the second track.  

**Result:** when the first track ends, the second one starts automatically.  
This allows you to create smooth transitions between scenes or musical segments.

## Connecting with other elements

Playback events can be connected with slots and events of other elements.

As a general rule — **if the slots share the same color (e.g., pink), they can be connected.**

This enables endless creative combinations!

{{< figure src="trigger_example.jpg" caption="Fig. 4 – Connection between an event and a track’s input slot." class="docs-img" >}}

# Have questions?

{{< docs-contact >}}
