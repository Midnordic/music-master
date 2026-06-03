---
title: "Stream Deck"
icon: "🎮"
description: "Integracja z aplikacją Stream Deck."
weight: 0
---

## Czym jest Stream Deck?

**Stream Deck** to konsoleta z programowalnymi przyciskami, połączona z aplikacją, która pozwalają jednym kliknięciem uruchamiać skróty, makra i akcje w innych programach — na przykład przełączać sceny, sterować dźwiękiem, odpalać efekty, playlisty albo funkcje aplikacji. 

Więcej informacji: https://www.elgato.com/ww/pl/p/stream-deck

Stream Deck może stać się **wygodnym kontrolerem do Music Mastera** - zamiast klikać w interfejsie, można szybko wywoływać muzykę, soundboardy, techniki filmowe i inne funkcje programu za pomocą przycisku na konsolecie.

## Instalacja pluginu

Należy przejść przez następujące kroki:
1. Zainstalować aplikację Stream Deck (https://www.elgato.com/ww/en/s/downloads).
1. Zainstalować i aktywować aplikację Music Master [(instalacja i aktywacja)](../docs/installation).
1. Zainstalować plugin:
	1. Wejść do foleru z "Plugins" w głównym katalogu Music Mastera (zwykle jest to `C:\Users\[użytkownik]\AppData\Local\MusicMaster\Plugins`)
	1. Uruchomić plik `net.midnordic.musicmaster.streamdeck.streamDeckPlugin`
{{< figure src="plugin_file.webp" caption="Plik z pluginem." class="docs-img" >}}
	1. Potwierdzić chęć instalacji pluginu Music Master.
{{< figure src="plugin_confirm.webp" caption="Potwierdzenie instalacji." class="docs-img" >}}
1. Uruchomić aplikację Stream Deck (powinna się uruchomić samoczynnie podczas instalacji pluginu).
1. Uruchomić aplikację Music Master
1. W Menu Głównym wybrać **Integrations -> Stream Deck**.
{{< figure src="main_menu.webp" caption="Pozycja w menu głównym." class="docs-img" >}}
1. Pojawi się komunikat **"Connecting to Stream Deck..."**.
1. Po krótkiej chwili połączenie pomiędzy Music Masterem a Stream Deckiem powinno zostać nawiązane.

## Używanie pluginu

Po instalacji pluginu, w aplikacji Stream Deck pojawi się pozycja "Music Master". 
{{< figure src="streamdeck_plugin.webp" caption="Widok kilku pierwszych akcji." class="docs-img" >}}

Znajdują się tam wszystkie przyciski dostępne w pluginie. Aby ustawić jeden z nich, wystarczy przeciągnąć go na odpowiednie puste pole.

### Przyciski ogólne
- Hotkey - ogólny przycisk skrótu, który może być używany podczas przypisywania klawiszy skrótu w Music Masterze. Aby go użyć, należy wybrać odpowiedni skrót (*hotkey*)w aplikacji i nacisnąć na konsolecie ten przycisk. Skrót zostanie przypisany do tego przycisku. Można przypisywać skróty globalne jak i do poszczególnych utworów.

### Przyciski głośności
- Master Volume Up - podnosi głośność o 5%.
- Master Volume Down - obniża głośność o 5%.
- Master Volume Mute / Unmute - wycisza / przywraca głośność.

### Przyciski obejmujące wszystkie utwory
- Resume All Tracks - wszystkie zapauzowane utwory zostaną wznowione.
- Pause All Tracks - wszystkie odgrywane obecnie utwory zostaną zapauzowane.
- Stop All Tracks - wszystkie utwory zostaną zatrzymane.

### Przyciski obejmujące aktywną listę odtwarzania
- Play Next Track - przechodzi do kolejnego utworu.
- Play Previous Track - przechodzi do poprzedniego utworu.
- Play / Pause Current Track - wznawia / pauzuje obecnie odgrywany utwór.
- Stop Current Track - zatrzymuje obecnie odgrywany utwór.
- Fade In/Out Current Track - stopniowo wycisza / podgłaśnia obecnie odgrywany utwór.

### Przyciski do ustawienia
- Play / Pause Track - odgrywa / pauzuje wcześniej wybrany utwór.
- Play SFX - odgrywa wcześniej wybrany utwór z soundboardu.

# Masz Pytania?

{{< docs-contact >}}