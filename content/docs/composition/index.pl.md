---
title: "Projekt"
icon: "🧩"
description: "Wyjaśnienie czym jest projekt i jak dodawać utwory."
weight: 80
---
Projekt składa się ze wszystkich elementów: utworów, zdarzeń, list odtwarzania, soundboardów oraz technik filmowych. Jest to pewna całość, nad którą aktualnie pracujesz.

## Media (lewa kolumna)

Lewa kolumna zawiera dwie zakładki:
* **Tracks**: znajdują się tutaj wszystkie utwory dodane do projektu.
* **Events**: znajdują się tutaj zdarzenia utworzone automatycznie przez techniki filmowe lub za stworzone ręcznie za pomocą edytora.

Utwory i zdarzenia można dodawać do list odtwarzania.

## Listy Odtwarzania i Techniki Filmowe (środkowa kolumna)
Środkowa kolumna jest podzielona na dwie części:
* **Playlists & Soundboards**: górna część zawiera listy odtwarzania oraz soundboardy. To właśnie tutaj ustawiasz swoje playlisty oraz dodajesz efekty dźwiękowe do szybkiego odtwarzania w trakcie sesji.
* **Cinematiques**: dolna część zawiera listę technik filmowych dodanych do projektu.

## Inspektor (prawa kolumna)
Prawa kolumna to tzw. **Inspektor**, gdzie wyświetlane są właściwości zaznaczonych rzeczy. Można tam zmieniać właściwości utworów oraz technik filmowych.

{{< figure src="project_view_full.jpg" link="project_view_full.jpg" target="_blank" caption="Przykładowy projekt." class="docs-img" >}}

## Dodawanie utworów do projektu {#adding-tracks}

Aby dodać utwór do Projektu:
1. W lewej kolumnie naciśnij przycisk "Import" (ikona dużego plusa) i z menu rozwijanego wybierz "Import files..." lub "Import folder...".
1. Wybierz pliki lub foldery, które chcesz dodać do projektu.
1. Po zatwierdzeniu pliki w obsługiwanych formatach zostaną dodane do drzewka projektu.

{{< figure src="add_tracks.jpg" caption="Menu importu" class="docs-img" >}}

Obsługiwane formaty plików audio:
- .wav  
- .mp3  
- .ogg  

{{< tip icon="ok" title="Wskazówka" >}}
Możesz również dodać utwór lub cały folder, przeciągając go bezpośrednio do okna aplikacji.
{{< /tip >}}

## Usuwanie utworów z projektu {#removing-tracks}

Aby usunąć utwory z projektu, zaznacz je a następnie kliknij w ikonę „kosza”.

{{< tip icon="shock" title="Ups!" >}}
Usunięcie utworu z drzewka projektu spowoduje jego usunięcie ze wszystkich miejsc — list odtwarzania oraz technik filmowych. Wszystkie połączenia stworzone w edytorze do i z tego elementu zostaną utracone.
{{< /tip >}}

## Zapisywanie i wczytywanie projektu {#saving}

Każdy projekt można zapisać do pliku (z rozszerzeniem .mm), a następnie wczytać ponownie.

{{< figure src="main_menu.jpg" caption="Główne menu" class="docs-img" >}}

Za pomocą menu głównego (lewy górny róg) możesz:
- **"New Project..."**: utworzyć nowy pusty projekt.
- **"Save Project..."**: zapisać projekt do pliku.
- **"Load Project..."**: wczytać projekt z pliku.
- **"Load Autosave"**: wczytać autozapisany projekt.

{{< tip icon="question" title="Uważaj!" >}}
W pliku zapisywane są ścieżki względne do plików audio. Oznacza to, że jeśli przeniesiesz utwór do innego folderu, kompozycja zawierająca ten utwór nie wczyta się poprawnie. Aby uniknąć problemów, najlepiej zapisywać kompozycję w tym samym folderze co pliki audio.
{{< /tip >}}

# Masz pytania?

{{< docs-contact >}}