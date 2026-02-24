---
title: "Odgrywanie utworów"
icon: "▶️"
description: "Utwory można odgrywać z kliku miejsc - dowiedz się jak."
weight: 60
---

Utwór można odegrać na wiele sposobów:
- z głównej listy odtwarzania
- z listy efektów dźwiękowych
- za pomocą zdarzeń
- z widoku edytora
- z widoku odtwarzanych utworów

Utwory są odgrywane w trzech trybach:
- zastrzeżonym
- warstwowym
- pojedyńczym

Każda tryb działa inaczej i niesie ze sobą inne możliwości.

## Tryby odgrywania {#modes}

### Zastrzeżony (główne listy odtwarzania)

Można odegrać tylko jeden utwór w tym trybie. Gdy chcemy uruchomić nowy utwór, wszystkie inne korzystające z tego trybu zostaną zakończone.

Tryb ten jest używany przez główne listy odtwarzania, aby zasymulować działanie zwykłego odtwarzacza muzyki.

### Warstwowy (listy efektów dźwiękowych)

Można odegrać dowolną ilość utworów w tym trybie. Gdy uruchamiamy utwór, pozostałe korzystające z tego trybu nie zostaną zakończone.

Ten tryb używany jest przez listy efektów dźwiękowych. Dzięki niemu można odtworzyć ten sam efek dźwiękowy wielokrotnie, nakładając je na siebie jak warstwy.

### Pojedyńczy

Tylko jeden egzemplarz danego utworu może być odgrywany na raz. Gdy uruchamiamy dany utwór, pozostałe korzystające z tego trybu nie zostaną zakończone.

Tryb używany przez edytor oraz zdarzania. Ma to na celu obsługę złożonej logiki edytora i umożliwienie stworzenia różnych ciekawych operacji dźwiękowych. 

## Odgrywanie utworów z głównej listy odtwarzania (tryb zastrzeżony) {#playlist}

Utwory znajdujące się na liście odtwarzania mają przyciski, służące rozpoczęciu, zapauzowaniu oraz zatrzymaniu odgrywania. Są one identyczne jak przyciski w innych aplikacjach tego typu.

Przycisk zapauzowania pojawia się gdy utwór jest odgrywany.

{{< figure src="playlist_buttons.jpg" caption="Rys. 1 - Przycisk odgrywania z listy odtwarzania." class="docs-img" >}}

## Odgrywanie utworów z listy efektów dźwiękowych (tryb warstwowy) {#sfx}

Utwory znajdujące się na liście efektów dźwiękowych przybierają formę przycisków z symbolami. Aby odtworzyć dany utwór, należy nacisnąć odpowiadający mu przycisk.

{{< figure src="playlist_buttons2.jpg" caption="Rys. 2 - Przyciski odtwarzania z listy efektów dźwiękowych." class="docs-img" >}}

## Odgrywanie utworów za pomocą zdarzeń (tryb pojedyńczy) {#events}

Zdarzenia można dodawać zarówno do głównych listy odtwarzania, jak i do list efektów dźwiękowych.

Jeśli zdarzenie zostanie dodane do głównej listy, zawiera ono przycisk **"Trigger"**, dzięki któremu można dane zdarzenie wywołać. Jeśli dane zdarzenie ma za zadanie uruchomić utwór, to zostanie on odtworzony. 

{{< figure src="playlist_buttons3.jpg" caption="Rys. 3 - Przycisk zdarzenia w głównej liście odtwarzania." class="docs-img" >}}

## Odgrywanie utworów z widoku edytora (tryb pojedyńczy)

Każdy utwór można odnaleźć w edytorze. Jest on reprezentowany przez węzeł (bloczek). Wystarczy kliknąć na ikonę "Play" danego węzła, aby odtworzyć dany utwór w trybie pojedyńczym.

{{< figure src="editor_buttons.jpg" caption="Rys. 4 - Przyciski odtwarzania z węzła w edytorze." class="docs-img" >}}

## Odgrywanie utworów z widoku "Odtwarzane Utwory" {#nowplaying}

W widoku "Odtwarzane Utwory" znajdują się wszystkie aktualnie odgrywane utwory. Przy każdym z nich znajdują się przyciski służące do kontroli nad utworem, w taki sam sposób jak na liście odtwarzania.

{{< figure src="nowplaying_buttons.jpg" caption="Rys. 5 - Utwór w widoku 'Odtwarzane Utwory'." class="docs-img" >}}

## Manipulowanie wszystkimi odgrywanymi utworami {#nowplaying2}

Na górze widoku "Odtwarzane Utwory" znajdują się również przyciski służące do manipulacji wszystkimi utworami, które są obecnie na liście odtwarzanych utworów. Pozwalają one na:
- wznowić odgrywanie wszystkich zapauzowanych utworów
- zapauzować wszystkie utwory
- zatrzymać wszystkie utwory

{{< figure src="nowplaying_buttons_global.jpg" caption="Rys. 6 - Przyciski do manipulacji wszystkimi utworami." class="docs-img" >}}

Przyciski te są przydatne gdy użytkownik chce zatrzymać wszystko na raz, bez klikania w poszczególne utwory.

## Parametry utworu {#parameters}

Poniższe parametry utworu można zmieniać w trakcie odtwarzania.
- głośność (0 - 100%)
- prędkość (0.1 - 2.0x)
- pozycja (tylko lewy głośnik - oba głośniki - tylko prawy głośnik)
Przyciski ze strzałkami służą do powracania do wartości domyślnych.

{{< tip icon="ok" title="Wskazówka" >}}
Zmiana prędkości zmienia również wysokość dźwięku. Aby zmienić samą prędkość, bez zmiany wysokości dźwięku, trzeba użyć efektów dźwiękowych.
{{< /tip >}}

Można również zapętlić utwór. Aby to zrobić, trzeba zaznaczyć pole wyboru "Loop". Można ustawić ilość powtórzeń w zakresie 0 (nieskończoność) - 100x. 

{{< figure src="track_params.jpg" caption="Rys. 7 - Parametry utworu." class="docs-img" >}}

# Masz pytania?

{{< docs-contact >}}