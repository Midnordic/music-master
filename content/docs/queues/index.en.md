---
title: "Playback Queues"
icon: "🔢"
description: "Using queues to automatically play tracks in sequence."
weight: 50
---

Queues let you define the playback order of tracks — one after another.  
This way, you don’t need to manually start the next track — it happens automatically.

## Queue Buttons

Each playlist has its own queue, controlled by buttons located at the top of the playlist.  
{{< figure src="queue_buttons.jpg" caption="Fig. 1 - Queue control buttons." class="docs-img" >}}  

These buttons allow you to:
- enable/disable loop playback (*repeat*)  
- enable/disable random playback (*shuffle*)  
- add all tracks to the queue  
- clear all queued tracks  

## How Queues Work

Queues operate as follows:
- Tracks play in ascending order (first, second, third, etc.).  
- If loop playback is disabled, the queue ends after the last track finishes.  
- If loop playback is enabled, the queue restarts from the first track after the last one finishes.  
- If shuffle is enabled, tracks will play in random order instead of sequentially.  

To start the queue, you must begin playback of any track that **is already in the queue**.  
This means that if you created a queue but start playing a track not included in it, the queue won’t continue automatically after that track ends.

## Adding and Removing Tracks {#enqueue}

To add a track to the end of the queue, click the **lightning / more options icon** on the playlist item and select **“Queue → Add / Remove”**.  
The track will be added to the queue, and its position number will appear.

{{< figure src="queue_add.jpg" caption="Fig. 2 - Queueing buttons." class="docs-img" >}}  

To remove a track from the queue, perform the same action again.  
The track will be removed and its queue number will disappear.

{{< figure src="queue_order.jpg" caption="Fig. 3 - Queued tracks." class="docs-img" >}}  

## Adding a Track to the Beginning of the Queue

To add a track to the **front** of the queue, click the **lightning / more options icon** and select **“Queue → Add to Front.”**  
The selected track will move to the top of the queue, pushing others down by one position.

{{< figure src="queue_front.jpg" caption="Fig. 4 - Adding a track to the front of the queue." class="docs-img" >}}  

## Skipping to the Next / Previous Track in the Queue

You can manually move to the next or previous track in the queue.  
Use the queue control buttons located in the **Now Playing** panel.

{{< figure src="queue_buttons2.png" caption="Fig. 5 - Buttons for skipping between tracks in the queue." class="docs-img" >}}  

If the current track is the last one in the queue and looping is disabled, playback will stop when trying to move to the next track.  
Likewise, if the current track is the first and looping is disabled, the queue will end when trying to go backward.

## Notes About Queues

Each playlist has its own independent queue.  
Since multiple tracks can play at once, **multiple queues can be active simultaneously**.  

Be careful not to create confusion in your composition — otherwise, tracks from different playlists may start playing unexpectedly.

# Have Questions?

{{< docs-contact >}}
