---
title: "Events"
icon: "💥"
description: "Discover how events let you create flexible transitions and automation."
weight: 39
---

## What Are Events?

An **event** is a moment when a specific reaction occurs.

Reactions to an event are configured through **nodes** available in that event by creating connections between the nodes of other elements.

Each event contains:
- zero or more **input nodes** (on the left side) that modify the event’s behavior,  
- at least one **output node** (on the right side) that triggers connected actions when the event is activated.

Available event types:
- **Event** – a standard manually activated event.  
- **Timer Event** – a time-based event.  
- **Stop All Tracks Event** – an event that stops all currently playing tracks.

## Event (Standard Event)

{{< figure src="event_triggerable.jpg" caption="Fig. 1 – Standard event." class="docs-img" >}}

- This event is triggered **manually**.  
- It can be activated from the editor or playlist view using the “trigger” button.  
- It must be connected to other elements.  
- It’s good practice to give it a meaningful name describing its purpose.

## Timer Event (Time-Based Event)

{{< figure src="event_timer.jpg" caption="Fig. 2 – Timer event." class="docs-img" >}}

- This event is triggered **cyclically** at time intervals.  
- **Min** – defines the minimum number of seconds to wait.  
- **Max** – defines the maximum number of seconds to wait.  
- **Enabled** – when checked, the event is active and waiting for its next trigger.  
- **Trigger Once** – when checked, the event runs only once and then disables itself.  
- **Enable (input node)** – turns the event on so it starts triggering cyclically.  
- **Disable (input node)** – turns the event off, preventing it from triggering again.  

The activation time is randomized between the Min and Max values. To make the event trigger at a fixed interval, set both values to the same number.

**NOTE:** The event always starts disabled, even after loading a composition. You must enable it manually, for example, using the **Enable** node.  
This is intentional to prevent time-based events from starting unexpectedly after loading a composition.

{{< figure src="timer_activate.jpg" caption="Fig. 3 – Activating a timer event." class="docs-img" >}}

## Stop All Tracks Event

{{< figure src="event_stopall.jpg" caption="Fig. 4 – Stop All Tracks event." class="docs-img" >}}

- This event can be triggered **manually** or through an input node.  
- **Stop All (input node)** – stops all currently playing tracks.  
- **On Stop All (output node)** – activates when the “Stop All” event is triggered.  

This event can be used to stop all tracks at once without needing direct connections to each of them.

## Connecting with Other Elements

Events can be connected to other events, for example, [track events](docs/playback-events), using nodes.

As a rule of thumb: **if nodes share the same color (e.g., pink), they can be connected.**

This allows for endless creative combinations!

{{< figure src="trigger_example.jpg" caption="Fig. 5 – Connection between an event node and a track node." class="docs-img" >}}

## Examples

You can find many examples of using events and controllers on our **[blog](blog/)**.  

Visit it to see how they can be used creatively in practice and how they help build smooth, dynamic sound scenes.

# Have Questions?

{{< docs-contact >}}
