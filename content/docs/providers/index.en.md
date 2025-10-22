---
title: "Controllers"
icon: "🎛️"
description: "A simple way to automatically change track parameters."
weight: 37
---

## What Are Controllers?

**Controllers** are elements that automatically control track parameters.  
By reacting to events, they allow automated changes to parameters such as **volume** or **speed**.

Each controller has one or more **output nodes** that can be connected to track parameters.

Available controller types:
- **Fixed Value** – sets a specific value over a defined time.  
- **Randomizer** – generates a random value within a given range.  
- **Fade In/Out** – gradually increases or decreases volume.  
- **Crossfade** – allows smooth transitions between groups of tracks.

## How Do Controllers Work?

Controllers automatically manage track parameters (such as volume or speed).  

**Note:**  
If a controller is connected to a track parameter, that parameter cannot be changed manually — it’s now controlled by the controller.  
The last manually set value is marked by a **vertical line** on the parameter’s slider.  
Some controllers (e.g. *Crossfade*) can adapt to manually set values, so manual changes may still take effect as expected.

{{< figure src="connected_provider.jpg" caption="Fig. 1 – Controller connected to a track parameter." class="docs-img" >}}

## Fixed Value

{{< figure src="provider_fixed.jpg" caption="Fig. 2 – Fixed Value controller." class="docs-img" >}}

The **Fixed Value** controller allows quick switching between several predefined values.  
Each row (index) defines a value and the time it takes to reach it.

- **1, 2, 3...** – indexes with fields for *value* (0.0–2.0) and *transition time* (in seconds).  
- **Using index** – number of the currently active index.  
- **Use Index 1/2/3 (input nodes)** – switch to the selected index.  

This makes it easy to adjust volume or speed dynamically depending on what’s happening in your game.

## Randomizer

{{< figure src="provider_randomizer.jpg" caption="Fig. 3 – Randomizer controller." class="docs-img" >}}

The **Randomizer** controller generates a random value within a specified range.  

It can be configured to randomize **continuously** or **just once**.

- **Min** – minimum possible value.  
- **Max** – maximum possible value.  
- **Continuous** – if enabled, the controller randomizes periodically.  
- **Delta** – time interval (in seconds) between randomizations.  
- **Randomize (input node)** – triggers an immediate randomization.  

The Randomizer is great for introducing unpredictability — e.g., subtle variations in volume or tempo that make playback feel m
