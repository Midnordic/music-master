---
title: "Kompozycja"
icon: "🧩"
description: "Wyjaśnienie czym jest kompozycja i jak dodawać utwory."
weight: 80
---

Kompozycja składa się ze wszystkich elementów: utworów, zdarzeń, list odtwarzania, sterowników oraz połączeń między nimi. Jest to po prostu całość, nad którą aktualnie pracujesz.

W widoku kompozycji (lewa strona) widoczne są główne elementy dodane do kompozycji, które można później przenosić do list odtwarzania (prawa strona). Są to przede wszystkim utwory i zdarzenia.

{{< figure src="composition_view.jpg" link="composition_view.jpg" target="_blank" caption="Rys. 1 - Kompozycja i wypełnione listy odtwarzania." class="docs-img" >}}

## Dodawanie utworów {#adding-tracks}

Aby dodać utwór do kompozycji, kliknij przycisk menu głównego (lewy górny róg). Po rozwinięciu menu wybierz opcję „Add tracks...” lub „Add folder...”, a następnie wskaż odpowiednie pliki lub foldery.

{{< figure src="add_tracks.jpg" caption="Rys. 2 - Menu główne." class="docs-img" >}}

{{< tip icon="ok" title="Wskazówka" >}}
Możesz również dodać utwór lub cały folder, przeciągając go bezpośrednio do okna aplikacji.
{{< /tip >}}

Obsługiwane formaty plików audio:
- .wav  
- .mp3  
- .ogg  

{{< tip icon="question" title="Uważaj!" >}}
Ten sam plik audio można dodać wielokrotnie do tej samej kompozycji. Aby uniknąć pomyłek, warto zmienić nazwę takiego utworu po jego dodaniu. Wystarczy dwukrotnie kliknąć (lub kliknąć prawym przyciskiem myszy) nazwę utworu i wpisać nową.
{{< /tip >}}

## Usuwanie utworów {#removing-tracks}

Aby usunąć utwór z kompozycji, kliknij ikonę „kosza” znajdującą się po jego prawej stronie.

{{< figure src="delete_track.jpg" caption="Rys. 3 - Usuwanie utworu." class="docs-img" >}}

{{< tip icon="shock" title="Ups!" >}}
Usunięcie utworu z kompozycji spowoduje jego usunięcie ze wszystkich miejsc — list odtwarzania, edytora oraz odtwarzania. Wszystkie połączenia do i z tego elementu zostaną utracone.
{{< /tip >}}

## Zapisywanie i wczytywanie kompozycji {#saving}

Każdą kompozycję można zapisać do pliku (z rozszerzeniem .mm), a następnie wczytać ponownie.

Za pomocą menu głównego (lewy górny róg) możesz:
- **"New Composition..."** -> utworzyć nową (wyczyścić) kompozycję 
- **"Save Composition..."** -> zapisać kompozycję do pliku 
- **"Load Composition..."** -> wczytać kompozycję z pliku

{{< tip icon="question" title="Uważaj!" >}}
W pliku zapisywane są ścieżki względne do plików audio. Oznacza to, że jeśli przeniesiesz utwór do innego folderu, kompozycja zawierająca ten utwór nie wczyta się poprawnie. Aby uniknąć problemów, najlepiej zapisywać kompozycję w tym samym folderze co pliki audio.
{{< /tip >}}

# Masz pytania?

{{< docs-contact >}}