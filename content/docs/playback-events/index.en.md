---
title: "Playback Events"
icon: "⚡"
description: "Learn what playback events are and how to use them to create your own automation."
weight: 38
---

## What Are Playback Events?

A **Playback Event** is a change in a track’s state — for example, from playing to finished.  

You can program reactions to any event — such as when a track starts, pauses, resumes, stops, loops, or finishes.  

Each playback event has **input and output nodes** that you can connect to other elements in the editor.

Available playback events:
- **Play / On Play** — track starts playing  
- **Pause / On Pause** — track is paused  
- **Resume / On Resume** — playback resumes  
- **Stop / On Stop** — playback stops  
- **Loop / On Loop** — loop point (transition from end to start)  
- **Finish / On Finish** — track finishes  

{{< figure src="events.jpg" caption="Fig. 1 – Playback events assigned to a track." class="docs-img" >}}

## How Do Playback Events Work?

Each time a playback event occurs (for example, when a track starts, pauses, or finishes), the **corresponding output node (on the right side)** is triggered.  

In the editor, you can **connect events and their nodes** to control other elements:
- A connection to an **input node** (left side) triggers that event and its output node.  
- A connection to an **output node** (right side) makes that node trigger other connected nodes.  

This way, you can design complex reactions — for example, making one track automatically start when another finishes.

## Example 1: *Play / On Play* Event

{{< figure src="play_example.jpg" caption="Fig. 2 – Example of a Play event." class="docs-img" >}}

In this example, we connected the **Play** events of two tracks.  

When the first track (*Dark Bar*) starts playing, its **On Play** output node is activated.  
That node is connected to the **Play** event of the second track, causing it to start automatically.

**Result:** starting the first track automatically triggers the second.

## Example 2: *Finish / On Finish* Event

{{< figure src="finish_example.jpg" caption="Fig. 3 – Example of a Finish event." class="docs-img" >}}

Here, the **Finish** event of the first track (specifically its output node) is connected to the **Play** event of the second track.  

**Result:** when the first track ends, the second one starts automatically.  
This allows you to create smooth transitions between scenes or musical segments.

## Connecting with Other Elements

Playback events can be connected with nodes and events of other elements.

As a general rule — **if the nodes share the same color (e.g., pink), they can be connected.**

This enables endless creative combinations!

{{< figure src="trigger_example.jpg" caption="Fig. 4 – Connection between an event node and a track’s input node." class="docs-img" >}}

# Have Questions?

{{< docs-contact >}}
