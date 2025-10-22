﻿---
title: "Kompozycja"
icon: "🧩"
description: "Wyjaśnienie czym jest kompozycja i jak dodawać utwory."
weight: 80
---

Na kompozycje składają się wszystkie elementy: utwory, zdarzenia, listy odtwarzania, węzły i połączenia między nimi. Po prostu jest to pewna całość, z którą w danej chwili pracujesz.

W widoku kompozycji (lewa strona) znajdują się dodane do kompozycji główne elementy, które można później przenieść do list utworów (prawa strona). Są to głównie utwory i zdarzenia. 

{{< figure src="composition_view.jpg" link="composition_view.jpg" target="_blank" caption="Rys. 1 - Kompozycja i wypełniona lista odtwarzania." class="docs-img" >}}

## Dodawanie utworów {#adding-tracks}

Aby dodać utwór do kompozycji, należy kliknąć ikonę nutki z plusem (blisko lewego górnego rogu). {{< figure src="add_file_icon.png" caption="Rys. 2 - Ikona dodawania utworów." class="docs-img-icon" >}} Pokaże się wtedy menu, które umożliwia:

- dodawanie pojedynczych plików.
- dodawanie całego folderu.
- dodawanie całego folderu i wszystkich subfolderów.

Obsługiwane formaty plików audio:
- .wav 
- .mp3
- .ogg

**UWAGA:** ten sam plik audio można dodać wielokrotnie do tej samej kompozycji. Aby uniknąć pomyłek, najlepiej zmieniać nazwy takich utworów po ich dodaniu do kompozycji. Wystarczy dwukrotnie kliknąć lewym przyciskiem myszy (lub raz prawym) na nazwę utworu i wpisać ją na nowo.

Można też dodać dowolny utwór lub cały folder klikając na nim i przeciągając go do okna aplikacji.

## Usuwanie utworów

Aby usunąć utwór z kompozycji, należy kliknąć ikonę "kosz" znajdującą się po jego prawej stronie.

Usunięcie utworu z kompozycji spowoduje usunięcie go również ze wszystkich innych miejsc - list utworów, edytora, oraz odtwarzania. Wszystkie połączenia z tym elementem zostaną zerwane.

## Zapisywanie i wczytywanie kompozycji {#saving}

Każda kompozycja może zostać zapisana do pliku (z rozszerzeniem .mm), a potem można ją z niego odtworzyć.

Aby zapisać lub wczytać kompozycję, należy kliknąć ikonę dokumentu z nutką (blisko lewego górnego rogu). {{< figure src="composition_icon.png" caption="Rys. 3 - Ikona kompozycji." class="docs-img-icon" >}} Pokaże się menu, które umożliwi:
- wyczyszczenie kompozycji
- zapisanie kompozycji do pliku
- wczytanie kompozycji z pliku

**UWAGA:** w pliku zapisywane są ścieżki względne do plików z utworami. Oznacza to, że jeśli przeniesiemy jakiś utwór do innego katalogu, to przy wczytaniu kompozycji zawierającej ten utwór, nie zostanie on odnaleziony i kompozycja nie wczyta się. Aby uniknąć tego błędu, najlepiej zapisywać kompozycję w folderze z plikami audio.

# Masz pytania?

{{< docs-contact >}}