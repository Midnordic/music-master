---
title: "Kolejki odtwarzania"
description: "Używanie kolejek w celu automatycznego odtwarzania utworów."
weight: 60
---

Za pomocą kolejki można ustawiać kolejność odtwarzania się utworów, jeden po drugim. Dzięki temu użytkownik nie musi pamiętać, aby przełączyć na następny utwór - następuje to automatycznie.

## Przyciski kolejki

Każda lista odtwarzania ma swoją osobną kolejkę, którą obsługuje się przyciskami znajdującymi się na górze listy odtwarzania. {{< figure src="queue_buttons.jpg" caption="Rys. 1 - Przyciski kolejki." class="docs-img" >}} 

Przyciski te umożliwiają:
- włączenie / wyłączenie odtwarzania w pętli (*repeat*)
- włączenie / wyłączenie odtwarzania losowego (*shuffle*)
- dodanie wszystkich utworów do kolejki
- usunięcie wszystkich zakolejkowanych utworów

## Jak działają kolejki?

Kolejki działają w następujący sposób:
- odtwarzają utwory z kolejności rosnącej (najpierw pierwszy, potem drugi, itd.).
- jeśli odtwarzanie w pętli jest wyłączone, kolejka kończy odtwarzanie po zakończeniu ostatniego utworu.
- jeśli odtwarzanie w pętli jest włączone, po ostatnim utworze znowu odegra się pierwszy utwór.
- jeśli odtwarzanie losowe jest włączone, utwory nie będą ogdrywały się po kolei, ale w losowej kolejności.

Aby uruchomić kolejkę, trzeba rozpocząć dowolny utwór, który **znajduje się w kolejce.** Oznacza to, że jeśli stworzyliśmy kolejkę z kilkoma utworami, ale obecnie odgrywany utwór nie jest w tej kolejce, to po jego zakończeniu kolejka nie uruchomi się. 

## Dodawanie i usuwanie utworu

Aby dodać utwór na koniec kolejki, należy na wybranym elemencie z listy odtwarzania, kliknąć ikonę pioruna "więcej opcji", z menu wybrać "Queue -> Add / Remove". Po tym utwór zostanie dodany do kolejki i stanie się widoczny jego numer w kolejce.

{{< figure src="queue_add.jpg" caption="Rys. 2 - Przyciski zakolejkowania." class="docs-img" >}} 

Aby usunąć utwór z kolejki, należy zrobić dokładnie to samo, co w podczas jego dodawania. Utwór zostanie usunięty z kolejki i jego numer w kolejce zniknie.

{{< figure src="queue_order.jpg" caption="Rys. 3 - Zakolejkowane utwory." class="docs-img" >}} 

## Dodawanie utworu na początek kolejki

Aby dodać utwór na sam początek kolejki, należy kliknąć ikonę pioruna "więcej opcji", z menu wybrać "Queue -> Add to Front". Wtedy dany utwór zostanie dodany na początek kolejki, a pozostałe utwory zostaną zepchnięte o do tyłu o jeden poziom.

{{< figure src="queue_front.jpg" caption="Rys. 4 - Dodanie do początku kolejki." class="docs-img" >}} 

## Uwagi odnośnie kolejek

Każda lista odtwarzania ma swoją kolejkę i kolejki te działają niezależnie od siebie. Z racji tego, że wiele utworów na raz może być odtwarzanych, to **wiele kolejek może być aktywnych w tym samym czasie**. 

Należy na to uważać, aby nie wprowadzić niepotrzebnego zamieszania do swojej kompozycji i nie ździwić się, gdy nagle utwory z innych list włączą się automatycznie.

# Masz pytania?

{{< docs-contact >}}